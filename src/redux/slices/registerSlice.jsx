import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (params) => {
    try {
      const response = await axios.post("/api/register", params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const registerReducer = createReducer(
  {
    login: "",
    password: "",
    repeatPassword: "",
    error: null,
    registerStatus: "idle",
  },
  {
    updateLogin: (state, action) => {
      state.login = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateRepeatPassword: (state, action) => {
      state.repeatPassword = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    registerStatus: (state, action) => {
      state.registerStatus = action.payload;
    },
  }
);

export default registerReducer;
