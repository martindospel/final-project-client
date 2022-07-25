import React, { useState } from "react";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { useDispatch, useSelector } from "react-redux";
import { addToStudentTimelineAction } from "../slices/studentSlice";
import "./Form.css";

function Form() {
  const dispatch = useDispatch();
  const studentUuid = useSelector((store) => store.students?.currentStudent?.uuid);

  const [present, setPresent] = useState(true);
  const [goodPerf, setGoodPerf] = useState(true);
  const [goodBehave, setGoodBehave] = useState(true);
  const [perfComment, setPerfComment] = useState("");
  const [behaveComment, setBehaveComment] = useState("");
  const [date, setDate] = useState(new Date());

  const addToStudentTimeline = () => {
    dispatch(
      addToStudentTimelineAction({
        studentUuid,
        timeline: {
          date: date.toISOString(),
          present,
          goodBehave,
          goodPerf,
          perfComment,
          behaveComment,
        },
      })
    );
    setPresent(true);
    setGoodPerf(true);
    setGoodBehave(true);
    setPerfComment("");
    setBehaveComment("");
  };

  return (
    <div className="form">
      <div className="form__header">
        <h2>Add student status</h2>
        <Button label="Add to timeline" onClick={addToStudentTimeline} icon="pi pi-plus" />
      </div>
      <div className="form__parts">
        <div className="form__part">
          <ToggleButton
            className="p-button-sm"
            onLabel="Present"
            offLabel="Absent"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            checked={present}
            onChange={() => setPresent(!present)}
          />
          <Calendar value={date} id="icon" onChange={(e) => setDate(e.value)} showIcon />
        </div>
        <div className="form__part">
          <ToggleButton
            className="p-button-sm"
            onLabel="Good performance"
            offLabel="Bad performance"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            checked={goodPerf}
            onChange={() => setGoodPerf(!goodPerf)}
          />
          <InputTextarea
            value={perfComment}
            onChange={(e) => setPerfComment(e.target.value)}
            autoResize
            placeholder="Write performance comment here..."
            className="form__input--box"
          />
        </div>
        <div className="form__part">
          <ToggleButton
            className="p-button-sm"
            onLabel="Good behavior"
            offLabel="Bad behavior"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            checked={goodBehave}
            onChange={() => setGoodBehave(!goodBehave)}
          />
          <InputTextarea
            autoResize
            value={behaveComment}
            onChange={(e) => setBehaveComment(e.target.value)}
            placeholder="Write behaviour comment here..."
            className="form__input--box"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
