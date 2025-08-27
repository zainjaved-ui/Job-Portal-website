import React from 'react';
import './FilterComponent.css';

const JobListings = ({ jobs }) => {
  return (
    <div className="job-listings">
      <h2>Job Listings</h2>
      {jobs.length === 0 ? (
        <p>No jobs found matching your criteria.</p>
      ) : (
        <div className="jobs-grid">
          {jobs.map(job => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <div className="job-meta">
                <span className="job-type">{job.type}</span>
                <span className="experience">{job.experience}</span>
              </div>
              <p className="salary">${job.salary.toLocaleString()}</p>
              <p className="posted-date">Posted {job.postedDate}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListings;