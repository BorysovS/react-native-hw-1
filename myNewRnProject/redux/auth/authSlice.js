import { createSlice } from "@reduxjs/toolkit";
import { authSignUpUser } from "./operation";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        userName: null,
        userAvatar: null,
        userEmail: null,
        isAuth: false,
    },
    // reducers: {
    //     updateUserProfile: (state, { payload }) => ({ 
    //         ...state, userId: payload.uid,
    //     })
    // },
    extraReducers: (builder) => builder.addCase(authSignUpUser.fulfilled, (state, { payload }) => { 
        console.log(payload)
        state.userId = payload.uid;
        state.userName = payload.displayName;
        state.userAvatar = payload.photoURL;
        state.userEmail = payload.email;
        state.isAuth = true;
    })
});