import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { register, logIn, logOut, fetchCurrentUser } from './AuthOperation';

const handleRejected = (_, action) => {
    Notiflix.Notify.warning(action.payload);
};

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected]: handleRejected,

        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.rejected]: handleRejected,
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [logOut.rejected]: handleRejected,
        [fetchCurrentUser.pending](state) {
            state.isRefreshing = true;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [fetchCurrentUser.rejected](state, _) {
            state.isRefreshing = false;
        },
    },
});

export const authReducer = authSlice.reducer;