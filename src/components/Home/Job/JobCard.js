import React from 'react';
import './JobCard.css';
import { FaBriefcase, FaClock, FaDollarSign, FaMapMarkerAlt, FaBookmark } from 'react-icons/fa';

export default function JobCard({ job }) {
  return (
    <div className="modern-job-card">
      {/* Top Row: Time and Bookmark */}
      <div className="job-card-header">
        <span className="posted-time">{job.postedAt}</span>
        <FaBookmark className="bookmark-icon" />
      </div>

      {/* Main Info */}
      <div className="job-main-info">
        <img src={job.logo} alt="company logo" className="company-logo" />
        <div className="job-title-group">
          <h3 className="job-title">{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>
      </div>

      {/* Job Details Row */}
      <div className="job-info-row">
        <div className="info-tag"><FaBriefcase /> {job.category}</div>
        <div className="info-tag"><FaClock /> {job.type}</div>
        <div className="info-tag"><FaDollarSign /> {job.salary}</div>
        <div className="info-tag"><FaMapMarkerAlt /> {job.location}</div>
        {/* CTA Button */}
        <div className="job-footer">
            <button className="details-btn">Job Details</button>
        </div>
      </div>

      
    </div>
  );
}
