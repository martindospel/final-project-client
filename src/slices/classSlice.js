import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import classBloc from "../bloc/classBloc";

const initialState = {
  currentClass: null,
  currentClassStats: null,
};

export const fetchOneClassAction = createAsyncThunk("fetchOneClass", async (uuid) => {
  return await classBloc.fetchOneClass(uuid);
});

export const fetchOneClassStatisticsAction = createAsyncThunk("fetchOneClassStatistics", async (uuid) => {
  return await classBloc.fetchStatistics(uuid);
});

const classSlice = createSlice({
  name: "class",
  initialState,
  extraReducers: {
    [fetchOneClassAction.fulfilled]: (state, action) => {
      state.currentClass = action.payload;
    },
    [fetchOneClassStatisticsAction.fulfilled]: (state, action) => {
      state.currentClassStats = action.payload;
    },
  },
});

export default classSlice.reducer;
