import React from "react";
import "../css/DayTime.css";
export default function DayTime() {
  let day = "Wednesday";
  let time = "10:18";
  return (
    <span className="DayTime">
      <div className="row day-time gx-0 d-flex justify-content-center">
        <div className="col-7 col-sm-6 col-md-6 col-lg-4">
          <span className="day">{day}</span>
        </div>
        <div className="col-5 col-sm-6 col-md-6 col-lg-2">
          <span className="time">{time}</span>
        </div>
      </div>
    </span>
  );
}
