import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import teacherBloc from "../bloc/teacherBloc";

const initialState = {
  currentTeacher: null,
};

// get one teacher
export const fetchOneTeacherAction = createAsyncThunk(
  "fetchteacher",
  async (uuid) => {
    return await teacherBloc.fetchOneTeacher(uuid);
  }
);

// add one teacher 
export const addOneTeacherAction = createAsyncThunk("addTeacher", async ({fullName, email}) => {
    return await teacherBloc.addOneTeacher(fullName, email);
  }
);

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: {
    [fetchOneTeacherAction.fulfilled]: (state, action) => {
      state.currentTeacher = action.payload;
    },
    [addOneTeacherAction.fulfilled]: (state, action) => {
      state.currentTeacher = action.payload;
    }
  },
});

export default teacherSlice.reducer;
