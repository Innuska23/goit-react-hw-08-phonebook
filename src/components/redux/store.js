import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../redux/reduser';

export const store = configureStore({ reducer });