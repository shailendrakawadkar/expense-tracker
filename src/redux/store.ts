// import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/category/categorySlice';
import expenseReducer from './reducers/expense/expenseSlice';

// export const store = configureStore({
//     reducer : {
//         category : categoryReducer,
//         expense : expenseReducer
//     },
// });

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage as the storage engine

import { configureStore } from '@reduxjs/toolkit';
import {combineReducers } from 'redux'

const persistConfig = {
  key: 'root', // Key under which your state will be stored in storage
  storage, // The storage engine to use (e.g., localStorage)
};

const rootReducer = combineReducers({
    category : categoryReducer,
    expense : expenseReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // Use the persistedReducer
  // Add middleware and other configurations as needed
});

const persistor = persistStore(store);

export { persistor, persistedReducer, store };
