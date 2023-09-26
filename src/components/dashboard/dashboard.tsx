import { RootStateOrAny } from "react-redux";
import { useSelector } from "react-redux";
import { Expense } from "../../models/expense";

function Dashboard() {

  const expenses = useSelector((state : RootStateOrAny) => state.expense.expenses);

  // Get the current date
  const currentDate = new Date();

  // Calculate the current month and year
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed, so add 1

  const currentMonthExpenses = expenses.filter((expense : Expense) => {
    const expenseDate = new Date(expense.Date);
    const expenseYear = expenseDate.getFullYear();
    const expenseMonth = expenseDate.getMonth() + 1;

    return expenseYear === currentYear && expenseMonth === currentMonth;
  });

  let totalExpense = 0;
  expenses.map((expense : Expense) => totalExpense += +expense.Amount);

  let currentExpense = 0;
  currentMonthExpenses.map((expense : Expense) => currentExpense += +expense.Amount);

  // Calculate the previous month and year
  const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;

  const previousMonthExpenses = expenses.filter((expense : Expense) => {
    const expenseDate = new Date(expense.Date);
    const expenseYear = expenseDate.getFullYear();
    const expenseMonth = expenseDate.getMonth() + 1;

    return expenseYear === currentYear && expenseMonth === previousMonth;
  });  

  let previousExpense = 0;
  previousMonthExpenses.map((expense : Expense) => previousExpense += +expense.Amount);

  return (
    <div className="container mx-auto p-4 md:w-8/12 sm:w-full">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex">
                    <h2 className="flex-1 text-xl font-semibold mb-2">Total Expenses</h2>
                    <p className="flex-1 text-2xl text-end">{totalExpense}</p>
                </div>

                <div className="flex">
                    <h2 className="flex-1 text-xl font-semibold mb-2">This Month</h2>
                    <p className="flex-1 text-2xl text-end">{currentExpense}</p>
                </div>

                <div className="flex">
                    <h2 className="flex-1 text-xl font-semibold mb-2">Last Month</h2>
                    <p className="flex-1 text-2xl text-end">{previousExpense}</p>
                </div>
                
            </div>
    </div>

  )
}

export default Dashboard;