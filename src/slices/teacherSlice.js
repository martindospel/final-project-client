import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import teacherBloc from "../bloc/teacherBloc";

const initialState = {
  currentTeacher: null,
  loginRejected: false,
};

// get one teacher
export const loginTeacherAction = createAsyncThunk("loginTeacher", async (accessToken) => {
  return await teacherBloc.loginTeacher(accessToken);
});

// add one teacher
export const signupTeacherAction = createAsyncThunk("signupTeacher", async ({ fullName, accessToken }) => {
  return await teacherBloc.signupTeacher(fullName, accessToken);
});

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: {
    [loginTeacherAction.fulfilled]: (state, action) => {
      state.currentTeacher = action.payload;
    },
    [loginTeacherAction.rejected]: (state) => {
      state.loginRejected = true;
    },
    [signupTeacherAction.fulfilled]: (state, action) => {
      state.currentTeacher = action.payload;
    },
  },
});

export default teacherSlice.reducer;
