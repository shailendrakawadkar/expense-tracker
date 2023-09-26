import { useState } from "react";
import { RootStateOrAny } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Expense as ExpenseModel } from "../../models/expense";

import { MdDelete } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";
import { AiOutlineCloseSquare } from "react-icons/ai";
import {
  addExpense,
  removeExpense,
} from "../../redux/reducers/expense/expenseSlice";
import { Category } from "../../models/category";
import NoData from "../../assets/images/NoData.jpg";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants";
import { useEffect } from "react";

function Expense() {
  useEffect(() => {
    // Set the new title when the component mounts
    document.title = "Expense Tracker | Expenses";

    // Optionally, you can reset the title when the component unmounts
    return () => {
      document.title = "Expense Tracker";
    };
  }, []);

  const [newExpense, setNewExpense] = useState<any>({});
  const [addNewExpense, setAddNewExpense] = useState<boolean>(false);

  const dispatch = useDispatch();

  const expenses = useSelector(
    (state: RootStateOrAny) => state.expense.expenses
  );

  const categories = useSelector(
    (state: RootStateOrAny) => state.category.categories
  );

  const addExpenseHandler = (e) => {
    e.preventDefault();
    dispatch(
      addExpense({
        expense: {
          ...newExpense,
          Date: new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date()),
        } as ExpenseModel,
      })
    );
    toast.success("Expense added successfully", toastConfig);
    setNewExpense({});
    setAddNewExpense(false);
    const modal = document.getElementById("modal");
    modal?.classList.add("hidden");
  };

  return (
    <>
      <div className="md:w-1/2 sm:w-full mx-auto">
        <div className="flex justify-between mt-12 shadow-md p-5 bg-white">
          <h2 className="font-bold">Expenses</h2>
          <button
            disabled={addNewExpense}
            onClick={() => {
              const modal = document.getElementById("modal");
              modal?.classList.remove("hidden");
            }}
            className="bg-green-400 px-4 py-1 rounded text-white"
          >
            + Add Expense
          </button>
        </div>
        <div style={{ height: "500px", overflow: "auto" }}>
          {expenses.length ? (
            expenses.map((expense: ExpenseModel, index: number) => {
              return (
                <div
                  key={index}
                  className="shadow-md mx-1 my-2 flex justify-between p-2 border-l-8 border-green-400"
                >
                  <div>
                    <p className="font-bold">{expense.Description}</p>
                    <p className="text-sm text-gray-400">{expense.Date}</p>
                    <p className="text-sm text-gray-400">
                      Category :- {expense.Category}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="mr-2">
                      <TbCoinRupee className="inline mr-1 text-yellow-700" />
                      {expense.Amount}
                    </p>
                    <button
                      title="delete"
                      className="bg-red-400 bg-opacity-30 shadow"
                      onClick={() =>
                        dispatch(removeExpense({ Id: expense.Id }))
                      }
                    >
                      <MdDelete className="text-red-700" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center mt-2">
              <img src={NoData} width={450} height={450} />
            </div>
          )}
        </div>
      </div>
      {/* <!-- Modal container (hidden by default) --> */}
      <div
        id="modal"
        className="fixed inset-0 z-50 hidden flex items-center justify-center"
      >
        {/* <!-- Modal content --> */}
        <div className="w-full max-w-md p-8 mx-auto bg-white rounded shadow-lg">
          {/* <!-- Close button --> */}
          <div className="flex justify-between shadow-md px-1 py-2">
            <h2>Add Expense</h2>
            <button
              onClick={() => {
                const modal = document.getElementById("modal");
                modal?.classList.add("hidden");
              }}
            >
              <AiOutlineCloseSquare />
            </button>
          </div>

          {/* <!-- Modal content goes here --> */}
          <form
            className="mt-12 shadow-md p-5 bg-white"
            onSubmit={addExpenseHandler}
          >
            <div className="mt-2">
              <label className="block">Category</label>
              <select
                id="dropdown"
                name="dropdown"
                defaultValue={newExpense.Category ?? ""}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, Category: e.target.value })
                }
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories.map((category: Category, index: number) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-2">
              <label className="block">Description</label>
              <input
                placeholder="Description"
                className="mt-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newExpense.Description ?? ""}
                onChange={(e) =>
                  setNewExpense({ ...newExpense, Description: e.target.value })
                }
              />
            </div>

            <div className="mt-2">
              <label className="block">Amount</label>
              <input
                placeholder="Amount"
                className="mt-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newExpense.Amount ?? ""}
                type="number"
                onChange={(e) =>
                  setNewExpense({ ...newExpense, Amount: e.target.value })
                }
              />
            </div>

            <div className="flex justify-around mt-2">
              <button
                disabled={
                  !newExpense.Amount &&
                  !newExpense.Description &&
                  !newExpense.Category
                }
                type="submit"
                className="bg-green-400 text-white px-4 py-1 rounded"
              >
                Submit
              </button>

              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-1 rounded"
                onClick={() => {
                  setAddNewExpense(false);
                  setNewExpense({});

                  const modal = document.getElementById("modal");
                  modal?.classList.add("hidden");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Expense;
