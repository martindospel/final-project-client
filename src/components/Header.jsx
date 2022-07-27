import React from "react";
import "./Header.css";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { resetTeacher } from "../slices/teacherSlice";
import { resetCurrentStudent } from "../slices/studentSlice";
import ChangeClass from "./ChangeClass";

function Header() {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1 className="header__title">
        <strong>Track</strong>
        <span>Mate</span>
      </h1>
      <div className="header__buttons">
        <ChangeClass />
        <Button
          label="Show stats"
          icon="pi pi-chart-bar"
          onClick={() => dispatch(resetCurrentStudent())}
          className="p-button-outlined p-button-sm"
        />
        <Button label="Logout" icon="pi pi-sign-out" onClick={() => dispatch(resetTeacher())} className="p-button-outlined p-button-sm" />
      </div>
    </div>
  );
}

export default Header;
