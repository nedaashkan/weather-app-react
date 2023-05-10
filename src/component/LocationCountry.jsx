import "../css/LocationCountry.css";
import React from "react";
import DateWeather from "./DateWeather";
import DayTime from "./DayTime";
import WeatherInformation from "./WeatherInformation";
import CodeInformation from "./CodeInformation";
import TemperatureIcon from "./TemperatureIcon";
import WeeklyForecast from "./WeeklyForecast";

export default function LocationCountry(props) {
  const {
    city,
    country,
    date,
    temperature,
    humidity,
    wind,
    description,
    weatherIcon,
    coordinates,
  } = props.data;

  return (
    <span className="LocationCountry">
      <div className="row gx-0 mt-1 d-flex justify-content-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="location-and-icon">
            <i className="fa-solid fa-location-dot location-icon"></i>
            <h1>
              {city} , {country}
            </h1>
          </div>
        </div>
      </div>
      <TemperatureIcon
        icon={weatherIcon}
        description={description}
        temperature={temperature}
        text={"C°"}
      />
      <DateWeather date={date} description={description} />
      <DayTime date={date} />
      <WeatherInformation humidity={humidity} wind={wind} />
      <WeeklyForecast coord={coordinates} />
      <CodeInformation />
    </span>
  );
}
