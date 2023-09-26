import {createSlice, nanoid} from '@reduxjs/toolkit';
import { Expense } from '../../../models/expense';

const initialState = {
    expenses : [] as Expense[]
};


const expenseSlice = createSlice({
    name : 'expenses',
    initialState,
    reducers : {
        addExpense : (state, action) => {
            state.expenses.unshift({...action.payload.expense, Id : nanoid()})
        },

        removeExpense : (state, action) => {
            state.expenses = state.expenses.filter((expense : Expense) => expense.Id != action.payload.Id);
        },

        updateExpense : (state, action) => {
            const expenseIndex = state.expenses.findIndex((expense : Expense) => expense.Id == action.payload.Id);

            state.expenses[expenseIndex] = action.payload.Expense;
        }
    }
});


export const {addExpense, removeExpense, updateExpense} = expenseSlice.actions;

export default expenseSlice.reducer;