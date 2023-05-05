import React from "react";
import "../css/DayTime.css";
export default function DayTime(props) {
  return (
    <span className="DayTime">
      <div className="row day-time gx-0 d-flex justify-content-center">
        <div className="col-7 col-sm-6 col-md-6 col-lg-4">
          <span className="day">{props.day}</span>
        </div>
        <div className="col-5 col-sm-6 col-md-6 col-lg-2">
          <span className="time">{props.time}</span>
        </div>
      </div>
    </span>
  );
}
