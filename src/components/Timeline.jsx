import React from "react";
import TimelineDay from "./TimelineDay";
import { useSelector } from "react-redux";
import "./Timeline.css";

function Timeline() {
  const timeline = useSelector((store) => store.students?.currentStudent?.assessments);

  return (
    <div className="timeline">
      <div className="timeline--fields">
        <div className="timeline--fields__box">Timeline</div>
        <div className="timeline--fields__box">Present</div>
        <div className="timeline--fields__box">Academic Performance</div>
        <div className="timeline--fields__box">Behavior</div>
      </div>
      <div className="timeline__calendar">
        {timeline?.map((timelineDay) => (
          <TimelineDay key={timelineDay.uuid} timeline={timelineDay} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
