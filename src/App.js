import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          This project is created by{" "}
          <a
            href="https://www.linkedin.com/in/amanda-torres-brooks-6826b15a/"
            target="_blank"
            rel="noreferrer"
          >
            Amanda Torres
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/amandatorresapu/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
