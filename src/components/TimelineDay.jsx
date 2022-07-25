import React, { useState } from "react";
import { Tooltip } from "primereact/tooltip";
import "./TimelineDay.css";

function TimelineDay({ timeline }) {
  const [showPerfComment, setShowPerfComment] = useState(null);
  const [showBehaveComment, setShowBehaveComment] = useState(null);

  const convertDate = (date) => {
    const dateObj = date?.split("T")[0].split("-");
    const day = dateObj?.[2];
    const month = dateObj?.[1];
    const year = dateObj?.[0];
    let monthName = "";
    switch (Number.parseInt(month)) {
      case 1:
        monthName = "JAN";
        break;
      case 2:
        monthName = "FEB";
        break;
      case 3:
        monthName = "MAR";
        break;
      case 4:
        monthName = "APR";
        break;
      case 5:
        monthName = "MAY";
        break;
      case 6:
        monthName = "JUNE";
        break;
      case 7:
        monthName = "JULY";
        break;
      case 8:
        monthName = "AUG";
        break;
      case 9:
        monthName = "SEPT";
        break;
      case 10:
        monthName = "OCT";
        break;
      case 11:
        monthName = "NOV";
        break;
      case 12:
        monthName = "DEC";
        break;
      default:
        break;
    }
    return { day, year, monthName };
  };
  return (
    <div className="timeline__day">
      <div className="timeline__day--date">
        <span className="timeline-cal__month">{convertDate(timeline.date).monthName}</span>
        <span className="timeline-cal__day">{convertDate(timeline.date).day}</span>
        <span className="timeline-cal__year">{convertDate(timeline.date).year}</span>
      </div>
      <div className="timeline__box">
        <div className={"timeline__circle " + (!timeline.present ? "timeline__circle--off" : "")}></div>
      </div>
      {timeline.present && (
        <div
          className="timeline__box timeline__perf"
          onMouseEnter={() => setShowPerfComment(true)}
          onMouseLeave={() => setShowPerfComment(false)}
        >
          <div className={"timeline__circle " + (!timeline.goodPerf ? "timeline__circle--off" : "")}></div>
          {showPerfComment && (
            <Tooltip className="timeline__popup" target=".timeline__perf" mouseTrack mouseTrackLeft={10}>
              <h4>Performance Comment: </h4>
              <p>{timeline.perfComment}</p>
            </Tooltip>
          )}
        </div>
      )}
      {timeline.present && (
        <div
          className="timeline__box timeline__behave"
          onMouseEnter={() => setShowBehaveComment(true)}
          onMouseLeave={() => setShowBehaveComment(false)}
        >
          <div className={"timeline__circle " + (!timeline.goodBehave ? "timeline__circle--off" : "")}></div>
          {showBehaveComment && (
            <Tooltip className="timeline__popup" target=".timeline__behave" mouseTrack mouseTrackLeft={10}>
              <h4>Behaviour Comment: </h4>
              <p>{timeline.behaveComment}</p>
            </Tooltip>
          )}
        </div>
      )}
    </div>
  );
}

export default TimelineDay;
