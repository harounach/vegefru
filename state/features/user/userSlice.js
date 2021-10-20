import {
  createSlice,
  createEntityAdapter,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios";

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
  status: "Idle",
});

// Thunks
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    const { data } = await axios.post("/api/users/login", {
      data: {
        email,
        password,
      },
    });

    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdded: userAdapter.addOne,
    userDeleted: userAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "Idle";
        console.log(action.payload);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "Idle";
        console.log(action.payload);
      });
  },
});

// action creators
export const { userAdded, userDeleted } = userSlice.actions;

// reducer
export default userSlice.reducer;
