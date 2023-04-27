import "../css/WeeklyForecast.css";

export default function WeeklyForecast() {
  return (
    <div className="WeeklyForecast">
      <div className="row mt-2 gx-1 gx-lg-2 d-flex justify-content-center">
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h3>Thu</h3>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <span className="max-temp">18°</span>
              <span>8°</span>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h3>Fri</h3>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <span className="max-temp">17°</span>
              <span>7°</span>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h3>Sat</h3>
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <span className="max-temp">19°</span>
              <span>7°</span>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h3>Sun</h3>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span>7°</span>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h3>Mon</h3>
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <span className="max-temp">17°</span>
              <span>9°</span>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h3>Tue</h3>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <span className="max-temp">14°</span>
              <span>10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
