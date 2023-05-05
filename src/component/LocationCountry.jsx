import "../css/LocationCountry.css";
import axios from "axios";
import TemperatureIcon from "./TemperatureIcon";
import DateWeather from "./DateWeather";
import DayTime from "./DayTime";
import WeatherInformation from "./WeatherInformation";
import React, { useState } from "react";

export default function LocationCountry(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].main,
      weatherIcon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (weatherData.ready) {
    const {
      city,
      country,
      date,
      temperature,
      humidity,
      wind,
      description,
      weatherIcon,
    } = weatherData;
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
        />
        <DateWeather date={date} description={description} />
        <DayTime date={date} />
        <WeatherInformation humidity={humidity} wind={wind} />
      </span>
    );
  } else {
    let city = props.defalutcity;
    let appKey = "ab8e7ef210556986d1c9a75d6007b825";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=metric`;
    // axios.get(apiUrl).then(handleResponse);
    return "loading . . .";
  }
}
