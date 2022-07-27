import React, { useState, useEffect } from "react";
import { ListBox } from "primereact/listbox";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useSelector, useDispatch } from "react-redux";
import { createClassAction, fetchAllClassesAction, fetchAllClassesForATeacher } from "../slices/classSlice";
import "./AddClass.css";
import { classNames } from "primereact/utils";

function AddClass() {
  const dispatch = useDispatch();

  const [classNameValue, setClassNameValue] = useState(null);

  const teacher = useSelector((store) => store.class?.teacherUuid);
  const classList = useSelector((store) => store.class?.currentClass);

  const createClass = () => {
    dispatch(
      createClassAction({
        classUuid: currentClass,
        className: classNameValue,
      })
    );
    setClassNameValue(classList);
  }; 

  const populateClass = () => {
    dispatch( 
        fetchAllClassesAction({
            teacherUuid: teacher, 
        })   
    );
  }
  useEffect(()=>{
    populateClass();
  },[])

  return (
    <div>
      <Dialog
        header="Add a class"
        visible={true}
        footer={<Button label="Add Class" onClick={createClass} />}
        resizable={false}
        onHide={() => setClassNameValue(false)}
      >
        <div className="addClass__form">
          <div>
            <label htmlFor="name" className="classAdmission__form--option">
              Name
            </label>
            <InputText id="name" value={classNameValue} onChange={(e) => setClassNameValue(e.target.value)} className="classAdmission__form--input" />
          </div>
        </div> 
      </Dialog> 
     
      <Dialog
        header="Class List"
        visible={true}
        footer={<Button label="Add Class" onClick={classNameValue} />}
        resizable={false}
        onHide={() => setClassNameValue(false)}
      >
       <ListBox value={classList} options={classList} optionLabel="classNames" optionValue="teacherUuid.uuiD" />
       
      </Dialog> 
    </div>
  );
}

export default AddClass;
