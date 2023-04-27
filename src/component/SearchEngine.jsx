import axios from "axios";
import "../css/SearchEngine.css";
export default function SearchButton() {
  return (
    <span className="SearchButton">
      <div className="row gx-1 mt-1 d-flex justify-content-center">
        <div className="col-8 col-sm-9 col-md-9 col-lg-5">
          <form className="search-icon-box">
            <input
              type="text"
              placeholder="Enter a ciy"
              autoFocus="on"
              autoComplete="off"
              className="search-box w-100"
            />
            <button type="submit" className="search-btn">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </button>
          </form>
        </div>
        <div className="col-4 col-sm-3 col-md-3 col-lg-1">
          <button className="w-100 current-btn">Current</button>
        </div>
      </div>
    </span>
  );
}
