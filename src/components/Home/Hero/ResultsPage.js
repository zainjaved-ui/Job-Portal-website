import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ResultsPage() {
  const location = useLocation();
  const { selectedTitle, selectedLocation, selectedCategory } = location.state || {};

  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetch("https://689c2a8f58a27b18087d17b8.mockapi.io/Jobs")
      .then((res) => res.json())
      .then((data) => {
        const results = data.filter((job) => {
          return (
            (selectedTitle === "" || job.Title === selectedTitle) &&
            (selectedLocation === "" || job.Location === selectedLocation) &&
            (selectedCategory === "" ||
              job.category === selectedCategory ||
              job.Category === selectedCategory ||
              (job.category === undefined && selectedCategory === "General"))
          );
        });
        setFilteredJobs(results);
      })
      .catch((err) => console.error(err));
  }, [selectedTitle, selectedLocation, selectedCategory]);

  return (
    <div className="results-page">
      <h1>Search Results</h1>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.Title}</h3>
            <p>{job.CompanyName}</p>
            <p>{job.Location}</p>
            <p>{job.Salary}</p>
          </div>
        ))
      ) : (
        <p>No jobs found. Try different filters.</p>
      )}
    </div>
  );
}
