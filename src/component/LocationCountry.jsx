import "../css/LocationCountry.css";
import React from "react";
import DateWeather from "./DateWeather";
import DayTime from "./DayTime";
import WeatherInformation from "./WeatherInformation";
import UnitConversion from "./UnitConversion";
import CodeInformation from "./CodeInformation";

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
      <UnitConversion
        icon={weatherIcon}
        description={description}
        temperature={temperature}
      />
      <DateWeather date={date} description={description} />
      <DayTime date={date} />
      <WeatherInformation humidity={humidity} wind={wind} />
      <CodeInformation />
    </span>
  );
}
