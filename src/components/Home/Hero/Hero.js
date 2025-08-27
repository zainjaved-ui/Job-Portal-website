// import React, { useEffect, useState } from 'react';
// import './Hero.css';
// import { FaBriefcase, FaUsers, FaBuilding } from 'react-icons/fa';

// export default function Home() {
//   const [jobs, setJobs] = useState([]);
//   const [titles, setTitles] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch("https://689c2a8f58a27b18087d17b8.mockapi.io/Jobs") // your API
//       .then(res => res.json())
//       .then(data => {
//         setJobs(data);

//         // Extract unique values from API
//         const uniqueTitles = [...new Set(data.map(job => job.Title))];
//         const uniqueLocations = [...new Set(data.map(job => job.Location))];
//         const uniqueCategories = [...new Set(data.map(job => job.category || "General"))];

//         setTitles(uniqueTitles);
//         setLocations(uniqueLocations);
//         setCategories(uniqueCategories);
//       })
//       .catch(err => console.error("Error fetching jobs:", err));
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Headline */}
//       <h1 className="main-heading">Find Your Dream Job Today!</h1>
//       <p className="sub-text">Connecting Talent with Opportunity: Your Gateway to Career Success</p>

//       {/* Search Bar */}
//       <div className="search-bar d-flex">
//         {/* Job Titles */}
//         <select className="form-select search-input">
//           <option value="">Job Title</option>
//           {titles.map((title, idx) => (
//             <option key={idx} value={title}>{title}</option>
//           ))}
//         </select>

//         {/* Locations */}
//         <select className="form-select search-input">
//           <option value="">Location</option>
//           {locations.map((loc, idx) => (
//             <option key={idx} value={loc}>{loc}</option>
//           ))}
//         </select>

//         {/* Categories */}
//         <select className="form-select search-input">
//           <option value="">Category</option>
//           {categories.map((cat, idx) => (
//             <option key={idx} value={cat}>{cat}</option>
//           ))}
//         </select>

//         <button className="btn search-btn">Search</button>
//       </div>

//       {/* Stats */}
//       <div className="stats d-flex justify-content-center">
//         <div className="stat-box d-flex align-items-center">
//           <div className="icon-circle">
//             <FaBriefcase size={20} />
//           </div>
//           <div className="stat-text">
//             <h4>{jobs.length}+</h4>
//             <p>Total Jobs</p>
//           </div>
//         </div>

//         <div className="stat-box d-flex align-items-center">
//           <div className="icon-circle">
//             <FaUsers size={20} />
//           </div>
//           <div className="stat-text">
//             <h4>800+</h4>
//             <p>Candidates</p>
//           </div>
//         </div>

//         <div className="stat-box d-flex align-items-center">
//           <div className="icon-circle">
//             <FaBuilding size={20} />
//           </div>
//           <div className="stat-text">
//             <h4>300+</h4>
//             <p>Companies</p>
//           </div>
//         </div>
//       </div>  
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import "./Hero.css";
import { FaBriefcase, FaUsers, FaBuilding } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [titles, setTitles] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://689c2a8f58a27b18087d17b8.mockapi.io/Jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setTitles([...new Set(data.map((job) => job.Title))]);
        setLocations([...new Set(data.map((job) => job.Location))]);
        setCategories([
          ...new Set(
            data.map((job) => job.category || job.Category || "General")
          ),
        ]);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = () => {
    navigate("/results", {
      state: {
        selectedTitle,
        selectedLocation,
        selectedCategory,
      },
    });
  };

  return (
    <div className="home-container">
      <h1 className="main-heading">Find Your Dream Job Today!</h1>
      <p className="sub-text">
        Connecting Talent with Opportunity: Your Gateway to Career Success
      </p>

      {/* Search Bar */}
      <div className="search-bar d-flex">
        <select
          className="form-select search-input"
          value={selectedTitle}
          onChange={(e) => setSelectedTitle(e.target.value)}
        >
          <option value="">Job Title</option>
          {titles.map((title, i) => (
            <option key={i} value={title}>
              {title}
            </option>
          ))}
        </select>

        <select
          className="form-select search-input"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Location</option>
          {locations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          className="form-select search-input"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button className="btn search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Stats */}
      <div className="stats d-flex justify-content-center">
        <div className="stat-box d-flex align-items-center">
          <div className="icon-circle">
            <FaBriefcase size={20} />
          </div>
          <div className="stat-text">
            <h4>1200+</h4>
            <p>Total Jobs</p>
          </div>
        </div>
        <div className="stat-box d-flex align-items-center">
          <div className="icon-circle">
            <FaUsers size={20} />
          </div>
          <div className="stat-text">
            <h4>800+</h4>
            <p>Candidates</p>
          </div>
        </div>
        <div className="stat-box d-flex align-items-center">
          <div className="icon-circle">
            <FaBuilding size={20} />
          </div>
          <div className="stat-text">
            <h4>300+</h4>
            <p>Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
