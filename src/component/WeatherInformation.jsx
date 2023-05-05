import "../css/WeatherInformation.css";
export default function WeatherInformation(props) {
  return (
    <span className="WeatherInformation">
      <div className="row weather-info gx-0 mt-2 d-flex justify-content-center">
        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
          <i className="fa-solid fa-wind"></i>
          <span> Wind</span>
          <span>{props.wind} km/h</span>
        </div>
        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
          <i className="fa-solid fa-droplet"></i>
          <span> Hum</span>
          <span> {props.humidity} %</span>
        </div>
        <div className="col-12 col-sm-4 col-md-6 col-lg-2"></div>
      </div>
    </span>
  );
}
