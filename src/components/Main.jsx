import React from "react";
import Timeline from "./Timeline";
import Form from "./Form";
import "./Main.css";
import StudentProfile from "./StudentProfile";

function Main() {
  return (
    <div className="main">
      <StudentProfile />
      <Timeline />
      <Form />
    </div>
  );
}

export default Main;
