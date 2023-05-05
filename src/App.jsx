import "./App.css";
import SearchEngine from "./component/SearchEngine";
import LocationCountry from "./component/LocationCountry";
import WeeklyForecast from "./component/WeeklyForecast";
import CodeInformation from "./component/CodeInformation";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app gx-0">
          <SearchEngine />
          <LocationCountry defalutcity="urmia" />
          <WeeklyForecast />
          <CodeInformation />
        </div>
      </div>
    </div>
  );
}

export default App;
