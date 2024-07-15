

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // array that will contain all the users that has registered
  // initially it has 1 user
  users: [{ username: "Guest", password: "1Password" }],
  // current user will display the info of the current user thats logged in
  currentUser: null,
};

export const loginSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    register: (state, action) => {
      // Adds a new user to the array of users
      state.users.push(action.payload);
      //setting the current user to the one that was just registered
      state.currentUser = action.payload;
    },
    login: (state, action) => {
      // sets the current user to the user passed in
      state.currentUser = action.payload;
    },
    logout: (state) => {
      //setting the current user back to null
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = loginSlice.actions;

export const selectUsers = (state) => state.user.users;
export const selectCurrentUser = (state) => state.user.currentUser;

export default loginSlice.reducer;
