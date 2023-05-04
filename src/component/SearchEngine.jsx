import axios from "axios";
import "../css/SearchEngine.css";
export default function SearchButton() {
  return (
    <span className="SearchButton">
      <div className="row gx-1 mt-1 d-flex justify-content-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
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
      </div>
    </span>
  );
}
