import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../components/NavBar";
import Map from "../components/Map";
function Landing() {
  return (
    <div className="app-content">
      <div>
        <NavBar />
      </div>
      <div className="landing"></div>
      {/* project screenshots/gifs */}
      <div className="map">
        <Map />
      </div>
    </div>
  );
}

export default Landing;
