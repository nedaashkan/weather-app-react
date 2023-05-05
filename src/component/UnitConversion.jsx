import "../css/UnitConversion.css";
import React, { useState } from "react";
import TemperatureIcon from "./TemperatureIcon";

export default function UnitConversion(props) {
  let celsius = props.temperature;
  let [temperature, setTemperature] = useState(null);

  return (
    <span className="UnitConversion">
      <div className="row gx-0 d-flex justify-content-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-center">
          <div className="weather-number-icon">
            <div className="c-f-text" id="c-f-box">
              <span className="celsius">
                <a href="./" className="active">
                  °C
                </a>
              </span>
              <span className="line"></span>
              <span className="fahrenheit">
                <a href="./">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <TemperatureIcon
        icon={props.icon}
        description={props.description}
        temperature={"hh"}
      />
    </span>
  );
}
