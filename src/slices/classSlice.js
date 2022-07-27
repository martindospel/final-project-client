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

export const createClassAction = createAsyncThunk(
  "createOneClass",
  async ({teacherUuid, className}, thunkAPI) => {
    return await classBloc.createOneClass(teacherUuid, className);
  }
);

export const fetchAllClassesAction = createAsyncThunk(
  "fetchAllClasses",
  async (teacherUuid) => {
    return await classBloc.fetchAllClassesForATeacher(teacherUuid);
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  extraReducers: {
    [fetchOneClassAction.fulfilled]: (state, action) => {
      state.currentClass = action.payload;
    },
<<<<<<< HEAD
    [fetchAllClassesAction.fulfilled]: (state, action) => {
      state.currentClass.students = action.payload;
=======
    [fetchOneClassStatisticsAction.fulfilled]: (state, action) => {
      state.currentClassStats = action.payload;
>>>>>>> main
    },
  },
});

export default classSlice.reducer;
