import "../css/WeeklyForecast.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeeklyForecast">
        <div className="row mt-2 gx-1 gx-lg-2 d-flex justify-content-center">
          {forecast.map((x, y) => {
            if (y < 6) {
              return (
                <div className="col-2 col-sm-2 col-md-2 col-lg-1" key={y}>
                  <WeatherForecastDay data={x} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let coordinates = props.coord;
    let appKey = "ab8e7ef210556986d1c9a75d6007b825";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${appKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
