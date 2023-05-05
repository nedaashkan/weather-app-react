import React from "react";
import "../css/DateWeather.css";
export default function DateWeather(props) {
  let monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = props.date.getDate();
  let month = monthsName[props.date.getMonth()];

  return (
    <span className="DateWeather">
      <div className="row gx-0 d-flex justify-content-center">
        <div className="col-7 col-sm-6 col-md-6 col-lg-4">
          <h1>{`${month}‘ ${date}`}</h1>
        </div>
        <div className="col-5 col-sm-6 col-md-6 col-lg-2">
          <span className="weather">{props.description}</span>
        </div>
      </div>
    </span>
  );
}
