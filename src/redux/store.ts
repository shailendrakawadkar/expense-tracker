import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/category/categorySlice';

export const store = configureStore({
    reducer : {categoryReducer},
});

