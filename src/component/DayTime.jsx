import React from "react";
import "../css/DayTime.css";
export default function DayTime(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekdays[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span className="DayTime">
      <div className="row day-time gx-0 d-flex justify-content-center">
        <div className="col-7 col-sm-6 col-md-6 col-lg-4">
          <span className="day">{day}</span>
        </div>
        <div className="col-5 col-sm-6 col-md-6 col-lg-2">
          <span className="time">{`${hour} : ${minutes}`}</span>
        </div>
      </div>
    </span>
  );
}
