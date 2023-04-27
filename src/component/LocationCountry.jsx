import "../css/LocationCountry.css";
export default function LocationCountry() {
  let city = "Urmia";
  let country = "IR";
  return (
    <span className="LocationCountry">
      <div className="row gx-0 mt-1 d-flex justify-content-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="location-and-icon">
            <i className="fa-solid fa-location-dot location-icon"></i>
            <h1>
              {city},{country}
            </h1>
          </div>
        </div>
      </div>
    </span>
  );
}
