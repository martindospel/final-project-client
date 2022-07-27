import React, { useEffect } from "react";
import Header from "../components/Header";
import StudentList from "../components/StudentList";
import Main from "../components/Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneClassAction } from "../slices/classSlice";
import Statistics from "../components/Statistics";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const currentStudent = useSelector((store) => store.students?.currentStudent);

  useEffect(() => {
    dispatch(fetchOneClassAction("1"));
  }, [dispatch]);

  return (
    <div className="homepage-container">
      <Header />
      <StudentList />
      {currentStudent ? (
        <Main />
      ) : (
        <div className="main-placeholder">
          <Statistics />
        </div>
      )}
    </div>
  );
}

export default Home;
