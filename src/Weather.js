import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>New York</h1>
      <ul>
        <li>Sunday 9:00pm</li>
        <li>Clear with Periodic Clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="Clear with periodic clouds"
          />
          º6
        </div>
        <div className="col-6">
          <ul>
            <li>Preciptation: 1%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}