import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studentBloc from "../bloc/studentBloc";
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
  await studentBloc.addStudent({
    classUuid,
    studentName,
    dob,
    gender,
  });
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

//edit student profile
export const editStudentProfileAction = createAsyncThunk(
  "editStudentProfile",
  async ({ studentUuid, profile: { studentName, dob, gender, emergencyContact } }, thunkAPI) => {
    await studentBloc.editStudentProfile(studentUuid, {
      studentName,
      dob,
      gender,
      emergencyContact,
    });
    thunkAPI.dispatch(fetchOneStudentAction(studentUuid));
  }
);

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
