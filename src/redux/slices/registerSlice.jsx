// registerSlice.jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  login: "",
  password: "",
  repeatPassword: "",
  error: null,
  registerStatus: "idle", // idle, pending, succeeded, failed
};

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/register", { login, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    updateLogin: (state, action) => {
      state.login = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateRepeatPassword: (state, action) => {
      state.repeatPassword = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerStatus = "pending";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.registerStatus = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const { updateLogin, updatePassword, updateRepeatPassword, clearError } =
  registerSlice.actions;
export default registerSlice.reducer;
