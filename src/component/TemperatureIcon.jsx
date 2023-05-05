import "../css/TemperatureIcon.css";
export default function TemperatureIcon(props) {
  return (
    <span className="TemperatureIcon">
      <div className="row gx-0 d-flex justify-content-center">
        <div className="col-7 col-sm-6 col-md-6 col-lg-4">
          <h2>{props.temperature}°C</h2>
        </div>
        <div className="col-5 col-sm-6 col-md-6 col-lg-2">
          <img
            src={props.icon}
            alt={props.description}
            className="today-weather-icon mt-4"
          />
        </div>
      </div>
    </span>
  );
}
