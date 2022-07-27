import React, { useEffect } from "react";
import Header from "../components/Header";
import StudentList from "../components/StudentList";
import Main from "../components/Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClassesAction, fetchOneClassAction } from "../slices/classSlice";
import Statistics from "../components/Statistics";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const currentStudent = useSelector((store) => store.students?.currentStudent);
  const currentTeacherUuid = useSelector((store) => store.teacher?.currentTeacher?.uuid);
  const classesList = useSelector((store) => store.class?.classesList);
  const currentClass = useSelector((store) => store.class?.currentClass);

  useEffect(() => {
    fetchAllClassesAction(currentTeacherUuid);
  }, [dispatch, currentTeacherUuid]);

  useEffect(() => {
    if (classesList && classesList?.[0]?.uuid) {
      dispatch(fetchOneClassAction(classesList[0]?.uuid));
    }
  }, [classesList, dispatch]);

  return (
    <div className="homepage-container">
      <Header />
      <StudentList />
      {currentStudent ? <Main /> : <div className="main-placeholder">{currentClass && <Statistics />}</div>}
    </div>
  );
}

export default Home;
