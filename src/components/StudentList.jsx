import React, { useState } from "react";
import { ListBox } from "primereact/listbox";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { useSelector, useDispatch } from "react-redux";
import { addStudentAction, fetchOneStudentAction } from "../slices/studentSlice";
import "./StudentList.css";

function StudentList() {
  const [nameValue, setNameValue] = useState('');
  const [dobValue, setDobValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [showAddStudent, setShowAddStudent] = useState(false);

  const dispatch = useDispatch();

  const studentList = useSelector((store) => store.class?.currentClass?.students);
  const currentClass = useSelector((store) => store.class?.currentClass?.uuid);
  const currentStudent = useSelector((store) => store.students?.currentStudent?.uuid);

  const addStudent = () => {
    dispatch(
      addStudentAction({
        classUuid: currentClass,
        studentName: nameValue,
        dob: dobValue.toLocaleString(),
        gender: genderValue,
      })
    );
    setShowAddStudent(false);
  };

  return (
    
    <nav className="nav">
      <div className="nav__options">
        <Button className="nav__btn p-button-sm" label="Change class" icon="pi pi-sitemap" />
        <Button className="nav__btn p-button-sm" label="Add student" onClick={() => setShowAddStudent(true)} icon="pi pi-plus" />
      </div>
      <div className="student-list">
        <ListBox
          filter
          itemTemplate={(option) => {
            return (
              <div className="student-list-item">
                <i className="pi pi-star" style={{ marginRight: "10px", display: "inline-block" }}></i>
                {option.name}
              </div>
            );
          }}
          filterPlaceholder="Search students..."
          className="student-listbox"
          options={studentList}
          value={currentStudent}
          optionLabel={"name"}
          optionValue={"uuid"}
          onChange={(e) => {dispatch(fetchOneStudentAction(e.value))}}
        />
      </div>
      <Dialog
        header="Add a student"
        visible={showAddStudent}
        footer={<Button label="Add Student" onClick={addStudent} />}
        resizable={false}
        onHide={() => setShowAddStudent(false)}
      >
        <div className="admission__form">
          <div>
            <label htmlFor="name" className="admission__form--option">
              Name
            </label>
            <InputText id="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} className="admission__form--input" />
          </div>
          <div>
            <label htmlFor="gender" className="admission__form--option">
              Gender
            </label>
            <InputText
              id="gender"
              value={genderValue}
              onChange={(e) => setGenderValue(e.target.value)}
              className="admission__form--input"
            />{" "}
            <br />
          </div>
          <div>
            <label htmlFor="dob" className="admission__form--option">
              Date of Birth
            </label>
            <Calendar id="datetemplate" value={dobValue} onChange={(e) => setDobValue(e.value)} showIcon />
          </div>
        </div>
      </Dialog>
    </nav>
  );
}

export default StudentList;
