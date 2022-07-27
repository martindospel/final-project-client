import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import classBloc from "../bloc/classBloc";

const initialState = {
  currentClass: null,
  currentClassStats: null,
  classesList: [],
};

export const fetchOneClassStatisticsAction = createAsyncThunk("fetchOneClassStatistics", async (uuid) => {
  return await classBloc.fetchStatistics(uuid);
});

export const fetchOneClassAction = createAsyncThunk("fetchOneClass", async (uuid, thunkAPI) => {
  thunkAPI.dispatch(fetchOneClassStatisticsAction(uuid));
  return await classBloc.fetchOneClass(uuid);
});

export const fetchAllClassesAction = createAsyncThunk(
  "fetchAllClasses",
  async (teacherUuid) => {
    return await classBloc.fetchAllClassesForATeacher(teacherUuid);
  }
);

export const createClassAction = createAsyncThunk(
  "createOneClass",
  async ({teacherUuid, className}, thunkAPI) => {
    await classBloc.createOneClass(teacherUuid, className);
    thunkAPI.dispatch(fetchAllClassesAction(teacherUuid));
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  extraReducers: {
    [fetchOneClassAction.fulfilled]: (state, action) => {
      state.currentClass = action.payload;
    },
    [fetchAllClassesAction.fulfilled]: (state, action) => {
      state.classesList = action.payload;
    },
    [fetchOneClassStatisticsAction.fulfilled]: (state, action) => {
      state.currentClassStats = action.payload;
    },
  },
});

export default classSlice.reducer;
