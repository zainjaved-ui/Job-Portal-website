import React from "react";
import "./Search.css";
import img1 from "./img1.jpeg"; // Replace with your image path

export default function Search() {
  return (
    <div className="Search">
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="hero-content">
          <h1>
            Create A Better <br /> Future For Yourself
          </h1>
          <p>
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque rhoncus...
          </p>
          <button className="search-job-btn">Search Job</button>
        </div>
      </div>
    </div>
  );
}
