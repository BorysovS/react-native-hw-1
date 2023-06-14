import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { auth, db  } from "../../firebase/config";

export const authSignUpUser = createAsyncThunk('auth/signup', async({email, password, avatar, login} , { rejectWithValue }) => { 
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user)

    console.log(avatar);
    console.log(login);
    await updateProfile(auth.currentUser, {
      displayName: login,
      photoURL: avatar,
    });


    const updatedUser = {
      uid: auth.currentUser.uid,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    };
    // const { uid, displayName, email, photoURL } = user;
    console.log(updatedUser);

    return updatedUser;
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