import { createSlice } from '@reduxjs/toolkit';
import { authSignInUser, authSignUpUser } from './operation';
import { auth } from '../../firebase/config';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    userName: null,
    userAvatar: null,
    userEmail: null,
    isAuth: false,
  },
  reducers: {
      getCurrentUser: (state, { payload }) => ({
          ...state, userId: payload.userId,
        userName: payload.userName,
        userAvatar: payload.userAvatar,
        userEmail: payload.userEmail,
        isAuth: true,
          
      })
  },
  extraReducers: builder =>
    builder
      .addCase(authSignUpUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.userId = payload.uid;
        state.userName = payload.displayName;
        state.userAvatar = payload.photoURL;
        state.userEmail = payload.email;
        state.isAuth = true;
      })
          .addCase(authSignUpUser.rejected, (state, { payload }) => {
        alert(payload);
      })
          .addCase(authSignInUser.fulfilled, (state, { payload }) => {
              state.isAuth = true;
      }),
});

export const { getCurrentUser } = authSlice.actions;
