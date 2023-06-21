import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});