import "../css/WeatherForecastDay.css";
import React, { useState } from "react";
export default function WeatherForecastDay(props) {
  let forecast = props.data;
  function icon() {
    let weatherIcon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
    return weatherIcon;
  }
  function maxTemperature() {
    let temperature = Math.round(forecast.temp.max);
    return temperature;
  }
  function minTemperature() {
    let temperature = Math.round(forecast.temp.min);
    return temperature;
  }
  function description() {
    let description = forecast.weather.description;
    return description;
  }
  function day() {
    let date = new Date(forecast.dt * 1000);
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = weekdays[date.getDay()];
    return day;
  }
  return (
    <span className="WeatherForecastDay">
      <div className="card w-100">
        <h1>{day()}</h1>
        <img src={icon()} alt={description()} className="w-100" />
        <div className="min-max-temp">
          <span className="max-temp">{maxTemperature()}°</span>
          <span>{minTemperature()}°</span>
        </div>
      </div>
    </span>
  );
}
