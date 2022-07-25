import React, { useEffect } from "react";
import Header from "../components/Header";
import StudentList from "../components/StudentList";
import Main from "../components/Main";
import "./Home.css";
import { useDispatch } from "react-redux";
import { fetchOneClassAction } from "../slices/classSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneClassAction("1"));
  }, [dispatch]);

  return (
    <div className="homepage-container">
      <Header />
      <StudentList />
      <Main />
    </div>
  );
}

export default Home;
