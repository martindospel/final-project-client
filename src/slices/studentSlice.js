import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studentBloc from "../bloc/studentBloc";
import classBloc from "../bloc/classBloc";
import { fetchOneClassAction } from "./classSlice";

const initialState = {
  currentStudent: null,
};

//get one student
export const fetchOneStudentAction = createAsyncThunk("fetchOneStudent", async (uuid) => {
  return await studentBloc.fetchOneStudent(uuid);
});

//add one student
export const addStudentAction = createAsyncThunk("addStudent", async ({ classUuid, studentName, dob, gender }, thunkAPI) => {
  const res = await studentBloc.addStudent({
    classUuid,
    studentName,
    dob,
    gender,
  });
  await classBloc.addStudentToClass(classUuid, res.uuid);
  thunkAPI.dispatch(fetchOneClassAction(classUuid));
});

//add to student timeline
export const addToStudentTimelineAction = createAsyncThunk(
  "addToStudentTimeline",
  async ({ studentUuid, timeline: { present, goodBehave, goodPerf, behaveComment, perfComment, date } }, thunkAPI) => {
    await studentBloc.addToStudentTimeline(studentUuid, {
      present,
      goodBehave,
      goodPerf,
      behaveComment,
      perfComment,
      date,
    });
    thunkAPI.dispatch(fetchOneStudentAction(studentUuid));
  }
);

//edit student timeline
export const editStudentTimelineAction = createAsyncThunk(
  "editStudentTimeline",
  async ({ studentUuid, timelineUuid, timeline: { present, goodBehave, goodPerf, behaveComment, perfComment, date } }, thunkAPI) => {
    await studentBloc.editStudentTimeline(studentUuid, timelineUuid, {
      present,
      goodBehave,
      goodPerf,
      behaveComment,
      perfComment,
      date,
    });
    thunkAPI.dispatch(fetchOneStudentAction(studentUuid));
  }
);

//delete one student
export const deleteStudentAction = createAsyncThunk("deleteStudent", async ({ uuid, classUuid }, thunkAPI) => {
  await studentBloc.deleteStudent(uuid);
  thunkAPI.dispatch(fetchOneClassAction(classUuid));
});



//studentSlice
const studentSlice = createSlice({
  name: "student",
  initialState,
  extraReducers: {
    [fetchOneStudentAction.fulfilled]: (state, action) => {
      state.currentStudent = action.payload;
    },
  },
});

export default studentSlice.reducer;
