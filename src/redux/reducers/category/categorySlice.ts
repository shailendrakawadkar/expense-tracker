import {createSlice, nanoid} from "@reduxjs/toolkit";
import { Category } from "../../../models/category";

const initialState = {
    categories : [
        {id : "1", name : 'Education', primary : true},
        {id : "2", name : 'Shopping', primary : true},
        {id : "3", name : 'Health Care', primary : true},
        {id : "4", name : 'Food', primary : true},
        {id : "5", name : 'Groceries', primary : true},
    ] as Category[] 
};

const categorySlice = createSlice({
    name : "category",
    initialState,
    reducers : {
        addCategory : (state, action) => {
            const category = {
                id : nanoid(),
                name : action.payload.name,
                primary : false
            }
            state.categories.unshift(category);
        },

        removeCategory : (state, action) => {
            state.categories = state.categories.filter(c => c.id != action.payload.id);
        },

        updateCategory : (state, action) => {
            const categoryIndex = state.categories.findIndex((category) => category.id == action.payload.id);
            state.categories[categoryIndex].name = action.payload.name;
        }
    }
});


export const {addCategory, removeCategory, updateCategory} = categorySlice.actions;

export default categorySlice.reducer;