import "../css/SearchEngine.css";
import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import LocationCountry from "./LocationCountry";

export default function SearchButton(props) {
  const [city, setCity] = useState(props.defalutCity);
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let appKey = "ab8e7ef210556986d1c9a75d6007b825";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <span className="SearchButton">
        <div className="row gx-1 mt-1 d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <form className="search-icon-box" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a ciy"
                autoFocus="on"
                autoComplete="off"
                className="search-box w-100"
                onChange={handleCityChange}
              />
              <button type="submit" className="search-btn">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </button>
            </form>
          </div>
        </div>
        <LocationCountry data={weatherData} />
      </span>
    );
  } else {
    search();
    return (
      <Oval
        height={150}
        width={150}
        color="#554F58"
        wrapperStyle={{
          flex: 1,
          marginTop: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#554F56"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    );
  }
}
