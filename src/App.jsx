import "./App.css";
import SearchEngine from "./component/SearchEngine";
import LocationCountry from "./component/LocationCountry";
import TemperatureIcon from "./component/TemperatureIcon";
import DateWeather from "./component/DateWeather";
import DayTime from "./component/DayTime";
import WeatherInformation from "./component/WeatherInformation";
import WeeklyForecast from "./component/WeeklyForecast";
import CodeInformation from "./component/CodeInformation";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app gx-0 mt-2">
          <SearchEngine />
          <LocationCountry />
          <TemperatureIcon />
          <DateWeather />
          <DayTime />
          <WeatherInformation />
          <WeeklyForecast />
          <CodeInformation />
        </div>
      </div>
    </div>
  );
}

export default App;
