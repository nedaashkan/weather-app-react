import "../css/WeeklyForecast.css";

export default function WeeklyForecast() {
  return (
    <div className="WeeklyForecast">
      <div className="row mt-2 gx-1 gx-lg-2 d-flex justify-content-center">
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h1>Thu</h1>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <h1>8°</h1>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h1>Fri</h1>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <h1>7°</h1>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h1>Sat</h1>
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <h1>7°</h1>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h1>Sun</h1>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <h1>7°</h1>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h1>Mon</h1>
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <h1>9°</h1>
            </div>
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-1">
          <div className="card w-100">
            <h1>Tue</h1>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="animated cloudy icon"
              className="w-100"
            />
            <div className="min-max-temp">
              <h1>10°</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
