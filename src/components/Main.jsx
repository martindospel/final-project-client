import React from "react";
import Timeline from "./Timeline";
import Form from "./Form";
import { useSelector } from "react-redux";
import "./Main.css";

function Main() {
  const student = useSelector((store) => store.students.currentStudent);

  return (
    <div className="main">
      <h1 className="main__student--name">{student?.name}</h1>
      <Timeline />
      <Form />
    </div>
  );
}

export default Main;
