import "../css/TemperatureIcon.css";
export default function TemperatureIcon() {
  let temperature = 15;
  let description = "Clouds";
  let weatherIcon = "http://openweathermap.org/img/wn/03d@2x.png";
  return (
    <span className="TemperatureIcon">
      <div className="row gx-0 d-flex justify-content-center">
        <div className="col-7 col-sm-6 col-md-6 col-lg-4">
          <h2>{temperature}°C</h2>
        </div>
        <div className="col-5 col-sm-6 col-md-6 col-lg-2">
          <img
            src={weatherIcon}
            alt={description}
            className="today-weather-icon mt-4"
          />
        </div>
      </div>
    </span>
  );
}
