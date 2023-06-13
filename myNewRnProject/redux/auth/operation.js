import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth, db } from "../../firebase/config";

export const authSignUpUser = createAsyncThunk('auth/signup', async({email, password, avatar, login} , { rejectWithValue }) => { 
  try {
      console.log(email)
       const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user)
    } catch (error) {
       return rejectWithValue(error.message); 
    }
});


export const authSignInUser = createAsyncThunk('auth/signin', async ({ email, password }, { rejectWithValue }) => { 
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return rejectWithValue(error.message);
  }
})