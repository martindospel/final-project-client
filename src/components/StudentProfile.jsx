import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { editStudentProfileAction } from "../slices/studentSlice";
import "./StudentProfile.css";

function StudentProfile() {
  const dispatch = useDispatch();
  const student = useSelector((store) => store.students.currentStudent);

  const [editMode, setEditMode] = useState(false);
  const [studentName, setStudentName] = useState(student.studentName);
  const [dob, setDob] = useState(new Date(student.dob));
  const [gender, setGender] = useState(student.gender);
  const [emergencyNum, setEmergencyNum] = useState(student.emergencyContact?.number ?? "");
  const [emergencyEmail, setEmergencyEmail] = useState(student.emergencyContact?.email ?? "");

  useEffect(() => {
    setEditMode(false);
  }, [student]);

  const editProfile = () => {
    if (editMode) {
      dispatch(
        editStudentProfileAction({
          studentUuid: student.uuid,
          profile: {
            studentName,
            dob: dob.toISOString(),
            gender,
            emergencyContact: {
              number: emergencyNum,
              email: emergencyEmail,
            },
          },
        })
      );
    } else {
      setEditMode(true);
    }
  };

  return (
    <div className="student-profile">
      <div className="student-profile__header">
        <h2>Student Profile</h2>
        <Button
          onClick={editProfile}
          label={editMode ? "Save Profile" : "Edit Profile"}
          icon={"pi " + (!editMode ? "pi-pencil" : "pi-save")}
        />
      </div>
      <div className="student-profile__fields">
        <div className="student-profile__vertical-slices">
          <div className="student-profile__horizontal-slices">
            <p>Student Name:</p>
            {editMode ? (
              <InputText
                style={{ width: "250px" }}
                value={studentName}
                placeholder="Student Name"
                onChange={(e) => setStudentName(e.target.value)}
              />
            ) : (
              <p className="student-profile__field-value">{student.studentName}</p>
            )}
          </div>
          <div className="student-profile__horizontal-slices">
            <p>Date of birth:</p>
            {editMode ? (
              <Calendar style={{ width: "250px" }} value={dob} placeholder="Date of birth" onChange={(e) => setDob(e.target.value)} />
            ) : (
              <p className="student-profile__field-value">{new Date(student.dob).toLocaleDateString()}</p>
            )}
          </div>
          <div className="student-profile__horizontal-slices">
            <p>Gender:</p>
            {editMode ? (
              <InputText style={{ width: "250px" }} value={gender} placeholder="Gender" onChange={(e) => setGender(e.target.value)} />
            ) : (
              <p className="student-profile__field-value">{student.gender}</p>
            )}
          </div>
        </div>
        <div className="student-profile__vertical-slices">
          <div className="student-profile__horizontal-slices">
            <h3>Emergency Contact Details</h3>
          </div>
          <div className="student-profile__horizontal-slices">
            <p>Emergency Number:</p>
            {editMode ? (
              <InputText
                style={{ width: "250px" }}
                value={emergencyNum}
                placeholder="Contact number"
                onChange={(e) => setEmergencyNum(e.target.value)}
              />
            ) : (
              <p className="student-profile__field-value">{student.emergencyContact?.number || "No registered phone number"}</p>
            )}
          </div>
          <div className="student-profile__horizontal-slices">
            <p>Emergency Email:</p>
            {editMode ? (
              <InputText
                style={{ width: "250px" }}
                value={emergencyEmail}
                placeholder="Contact Email"
                onChange={(e) => setEmergencyEmail(e.target.value)}
              />
            ) : (
              <p className="student-profile__field-value">{student.emergencyContact?.email || "No registered email"}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
