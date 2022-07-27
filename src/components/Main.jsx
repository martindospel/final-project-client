import React from "react";
import Timeline from "./Timeline";
import Form from "./Form";
import "./Main.css";
import StudentProfile from "./StudentProfile";

function Main() {
<<<<<<< HEAD
  const student = useSelector((store) => store.students.currentStudent);
=======
>>>>>>> main
  return (
    <div className="main">
      <StudentProfile />
      <Timeline />
      <Form />
    </div>
  );
}
export default Main;
