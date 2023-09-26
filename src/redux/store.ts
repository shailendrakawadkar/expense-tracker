import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/category/categorySlice';
import expenseReducer from './reducers/expense/expenseSlice';

export const store = configureStore({
    reducer : {
        category : categoryReducer,
        expense : expenseReducer
    },
});

