import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import teacherBloc from "../bloc/teacherBloc";

const initialState = {
  currentTeacher: null,
};

//get one teacher
export const fetchOneTeacherAction = createAsyncThunk(
  "addTeacher",
  async (uuid) => {
    return await teacherBloc.fetchOneTeacher(uuid);
  }
);

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: {
    [fetchOneTeacherAction.fulfilled]: (state, action) => {
      state.currentTeacher = action.payload;
    },
  },
});

export default teacherSlice.reducer;
