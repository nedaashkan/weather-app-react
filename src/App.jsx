import "./App.css";
import SearchEngine from "./SearchEngine";
import LocationCountry from "./LocationCountry";
import TemperatureIcon from "./TemperatureIcon";
import DateWeather from "./DateWeather";
import DayTime from "./DayTime";
import WeatherInformation from "./WeatherInformation";
import WeeklyForecast from "./WeeklyForecast";
import CodeInformation from "./CodeInformation";

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
