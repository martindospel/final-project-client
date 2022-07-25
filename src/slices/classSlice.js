import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import classBloc from "../bloc/classBloc";

const initialState = {
  currentClass: null,
};

export const fetchOneClassAction = createAsyncThunk(
  "fetchOneClass",
  async (uuid) => {
    return await classBloc.fetchOneClass(uuid);
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  extraReducers: {
    [fetchOneClassAction.fulfilled]: (state, action) => {
      state.currentClass = action.payload;
    },
  },
});

export default classSlice.reducer;
