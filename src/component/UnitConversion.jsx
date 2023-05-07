import "../css/UnitConversion.css";
import React, { useState } from "react";
import TemperatureIcon from "./TemperatureIcon";

export default function UnitConversion(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    let celsius = props.temperature;
    return (
      <span className="UnitConversion">
        <div className="row gx-0 d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-center">
            <div className="weather-number-icon">
              <div className="c-f-text">
                <span className="celsius active">°C</span>
                <span className="line"></span>
                <span className="fahrenheit">
                  <a href="/" onClick={showFahrenheit}>
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <TemperatureIcon
          icon={props.icon}
          description={props.description}
          temperature={celsius}
          text={"C°"}
        />
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.temperature * 9) / 5 + 32);
    return (
      <span className="UnitConversion">
        <div className="row gx-0 d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-center">
            <div className="weather-number-icon">
              <div className="c-f-text">
                <span className="celsius">
                  <a href="/" onClick={showCelsius}>
                    °C
                  </a>
                </span>
                <span className="line"></span>
                <span className="fahrenheit active">°F</span>
              </div>
            </div>
          </div>
        </div>
        <TemperatureIcon
          icon={props.icon}
          description={props.description}
          temperature={fahrenheit}
          text={"F°"}
        />
      </span>
    );
  }
}
