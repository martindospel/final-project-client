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
  reducers: {
    resetTeacher: (state) => {
      state.currentTeacher = null;
    },
  },
  extraReducers: {
    [loginTeacherAction.fulfilled]: (state, action) => {
      state.currentTeacher = action.payload;
      state.loginRejected = false;
    },
    [loginTeacherAction.rejected]: (state) => {
      state.loginRejected = true;
    },
    [signupTeacherAction.fulfilled]: (state, action) => {
      state.currentTeacher = action.payload;
      state.loginRejected = false;
    },
  },
});

export const { resetTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;
