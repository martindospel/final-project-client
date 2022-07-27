import React, { useState, useEffect } from "react";
import { ListBox } from "primereact/listbox";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useSelector, useDispatch } from "react-redux";
import { createClassAction, fetchAllClassesAction, fetchOneClassAction } from "../slices/classSlice";
import { resetCurrentStudent } from "../slices/studentSlice";
import "./ChangeClass.css";

function ChangeClass() {
  const dispatch = useDispatch();

  const [addClassVisible, setAddClassVisible] = useState(false);
  const [classesListVisible, setClassesListVisible] = useState(false);
  const [classNameValue, setClassNameValue] = useState("");

  const teacherUuid = useSelector((store) => store.teacher?.currentTeacher?.uuid);
  const classList = useSelector((store) => store.class?.classesList);
  const currentClass = useSelector((store) => store.class?.currentClass);

  const createClass = () => {
    dispatch(
      createClassAction({
        teacherUuid: teacherUuid,
        className: classNameValue,
      })
    );
    setAddClassVisible(false);
    setClassNameValue("");
  };

  const chooseClass = (uuid) => {
    dispatch(fetchOneClassAction(uuid));
    setClassesListVisible(false);
    dispatch(resetCurrentStudent());
  };

  useEffect(() => {
    dispatch(fetchAllClassesAction(teacherUuid));
  }, [dispatch, teacherUuid]);

  return (
    <>
      <Dialog
        header="Add a class"
        visible={addClassVisible}
        footer={<Button label="Add Class" onClick={createClass} />}
        resizable={false}
        onHide={() => setAddClassVisible(false)}
      >
        <div className="addClass__form">
          <div>
            <label htmlFor="name" className="classAdmission__form--option">
              Name
            </label>
            <InputText
              id="name"
              value={classNameValue}
              onChange={(e) => setClassNameValue(e.target.value)}
              className="classAdmission__form--input"
            />
          </div>
        </div>
      </Dialog>

      <Dialog header="Class List" visible={classesListVisible} resizable={false} onHide={() => setClassesListVisible(false)}>
        <Button icon="pi pi-plus" label="Add Class" onClick={() => setAddClassVisible(true)} />
        <div className="separator"></div>
        <ListBox
          style={{ width: "300px" }}
          value={classList}
          onChange={(e) => chooseClass(e.value)}
          options={classList}
          optionLabel="className"
          optionValue="uuid"
        />
      </Dialog>

      <Button
        className="p-button-sm p-button-outlined"
        label={"Chosen class: " + currentClass.className}
        onClick={() => setClassesListVisible(true)}
        icon="pi pi-sitemap"
      />
    </>
  );
}

export default ChangeClass;
