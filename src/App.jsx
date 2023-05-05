import "./App.css";
import SearchEngine from "./component/SearchEngine";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app gx-0">
          <SearchEngine defalutCity="urmia" />
        </div>
      </div>
    </div>
  );
}

export default App;
