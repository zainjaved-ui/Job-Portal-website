// import React, { useState } from 'react';
// import './FilterComponent.css';

// const FilterComponent = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     searchTerm: '',
//     location: '',
//     categories: [],
//     jobTypes: [],
//     experienceLevels: [],
//     datePosted: 'all',
//     salaryRange: [0, 100000]
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFilters(prev => ({ ...prev, [name]: value }));
//     onFilterChange({ ...filters, [name]: value });
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;
//     const filterArray = filters[name];
    
//     const updatedArray = checked
//       ? [...filterArray, value]
//       : filterArray.filter(item => item !== value);

//     const updatedFilters = { ...filters, [name]: updatedArray };
//     setFilters(updatedFilters);
//     onFilterChange(updatedFilters);
//   };

//   const handleRadioChange = (e) => {
//     const { name, value } = e.target;
//     const updatedFilters = { ...filters, [name]: value };
//     setFilters(updatedFilters);
//     onFilterChange(updatedFilters);
//   };

//   const handleSalaryChange = (e, index) => {
//     const newSalaryRange = [...filters.salaryRange];
//     newSalaryRange[index] = parseInt(e.target.value);
//     const updatedFilters = { ...filters, salaryRange: newSalaryRange };
//     setFilters(updatedFilters);
//     onFilterChange(updatedFilters);
//   };

//   return (
//     <div className="filter-sidebar">
//       <div className="filter-section">
//         <h3>Search by Job Title</h3>
//         <div className="filter-input">
//           <input
//             type="text"
//             name="searchTerm"
//             placeholder="Job Title or company"
//             value={filters.searchTerm}
//             onChange={handleInputChange}
//           />
//         </div>
//       </div>

//       <div className="filter-section">
//         <h3>Location</h3>
//         <div className="filter-input">
//           <select
//             name="location"
//             value={filters.location}
//             onChange={handleInputChange}
//           >
//             <option value="">Choose city</option>
//             <option value="new-york">New York</option>
//             <option value="london">London</option>
//             <option value="tokyo">Tokyo</option>
//             <option value="berlin">Berlin</option>
//           </select>
//         </div>
//       </div>

//       <div className="filter-section">
//         <h3>Category</h3>
//         <div className="filter-options">
//           {['Telecommunications', 'Habits & Tourism', 'Education', 'Financial Services'].map(category => (
//             <label key={category}>
//               <input
//                 type="checkbox"
//                 name="categories"
//                 value={category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}
//                 checked={filters.categories.includes(category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-'))}
//                 onChange={handleCheckboxChange}
//               />
//               {category}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="filter-section">
//         <h3>Job Type</h3>
//         <div className="filter-options">
//           {['Full Time', 'Part Time', 'Freelance', 'Susceptif', 'Fixed-Piece'].map(type => (
//             <label key={type}>
//               <input
//                 type="checkbox"
//                 name="jobTypes"
//                 value={type.toLowerCase().replace(/\s+/g, '-')}
//                 checked={filters.jobTypes.includes(type.toLowerCase().replace(/\s+/g, '-'))}
//                 onChange={handleCheckboxChange}
//               />
//               {type}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="filter-section">
//         <h3>Experience Level</h3>
//         <div className="filter-options">
//           {['No experience', 'Foster', 'Intermediate', 'Expert'].map(level => (
//             <label key={level}>
//               <input
//                 type="checkbox"
//                 name="experienceLevels"
//                 value={level.toLowerCase().replace(/\s+/g, '-')}
//                 checked={filters.experienceLevels.includes(level.toLowerCase().replace(/\s+/g, '-'))}
//                 onChange={handleCheckboxChange}
//               />
//               {level}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="filter-section">
//         <h3>Date Posted</h3>
//         <div className="filter-options">
//           {[
//             { value: 'all', label: 'All' },
//             { value: 'last-hour', label: 'Last Hour' },
//             { value: 'last-24-hours', label: 'Last 24 Hours' },
//             { value: 'last-7-days', label: 'Last 7 Days' },
//             { value: 'last-30-days', label: 'Last 30 Days' }
//           ].map(option => (
//             <label key={option.value}>
//               <input
//                 type="radio"
//                 name="datePosted"
//                 value={option.value}
//                 checked={filters.datePosted === option.value}
//                 onChange={handleRadioChange}
//               />
//               {option.label}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="filter-section">
//         <h3>Salary Range</h3>
//         <div className="salary-range">
//           <input
//             type="range"
//             min="0"
//             max="100000"
//             step="1000"
//             value={filters.salaryRange[0]}
//             onChange={(e) => handleSalaryChange(e, 0)}
//           />
//           <input
//             type="range"
//             min="0"
//             max="100000"
//             step="1000"
//             value={filters.salaryRange[1]}
//             onChange={(e) => handleSalaryChange(e, 1)}
//           />
//           <div className="salary-values">
//             ${filters.salaryRange[0].toLocaleString()} - ${filters.salaryRange[1].toLocaleString()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;


import React, { useState, useMemo } from 'react';
import './FilterComponent.css';

const FilterComponent = ({ jobs = [], onFilterChange }) => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    location: '',
    categories: [],
    jobTypes: [],
    experienceLevels: [],
    datePosted: 'all',
    salaryRange: [0, 100000]
  });

  // Get unique dynamic filter options from jobs
  const locations = useMemo(() => [...new Set(jobs.map(job => job.location))], [jobs]);
  const categories = useMemo(() => [...new Set(jobs.flatMap(job => job.categories || []))], [jobs]);
  const jobTypes = useMemo(() => [...new Set(jobs.map(job => job.type))], [jobs]);
  const experienceLevels = useMemo(() => [...new Set(jobs.map(job => job.experience))], [jobs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const filterArray = filters[name];

    const updatedArray = checked
      ? [...filterArray, value]
      : filterArray.filter(item => item !== value);

    const updatedFilters = { ...filters, [name]: updatedArray };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSalaryChange = (e, index) => {
    const newSalaryRange = [...filters.salaryRange];
    newSalaryRange[index] = parseInt(e.target.value);
    const updatedFilters = { ...filters, salaryRange: newSalaryRange };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filter-sidebar">
      {/* Search */}
      <div className="filter-section">
        <h3>Search by Job Title</h3>
        <input
          type="text"
          name="searchTerm"
          placeholder="Job Title or company"
          value={filters.searchTerm}
          onChange={handleInputChange}
        />
      </div>

      {/* Location */}
      <div className="filter-section">
        <h3>Location</h3>
        <select name="location" value={filters.location} onChange={handleInputChange}>
          <option value="">Choose city</option>
          {locations.map(loc => (
            <option key={loc} value={loc.toLowerCase()}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div className="filter-section">
        <h3>Category</h3>
        {categories.map(category => (
          <label key={category}>
            <input
              type="checkbox"
              name="categories"
              value={category.toLowerCase()}
              checked={filters.categories.includes(category.toLowerCase())}
              onChange={handleCheckboxChange}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Job Type */}
      <div className="filter-section">
        <h3>Job Type</h3>
        {jobTypes.map(type => (
          <label key={type}>
            <input
              type="checkbox"
              name="jobTypes"
              value={type.toLowerCase()}
              checked={filters.jobTypes.includes(type.toLowerCase())}
              onChange={handleCheckboxChange}
            />
            {type}
          </label>
        ))}
      </div>

      {/* Experience Level */}
      <div className="filter-section">
        <h3>Experience Level</h3>
        {experienceLevels.map(level => (
          <label key={level}>
            <input
              type="checkbox"
              name="experienceLevels"
              value={level.toLowerCase()}
              checked={filters.experienceLevels.includes(level.toLowerCase())}
              onChange={handleCheckboxChange}
            />
            {level}
          </label>
        ))}
      </div>

      {/* Salary Range */}
      <div className="filter-section">
        <h3>Salary Range</h3>
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={filters.salaryRange[0]}
          onChange={(e) => handleSalaryChange(e, 0)}
        />
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={filters.salaryRange[1]}
          onChange={(e) => handleSalaryChange(e, 1)}
        />
        <div>
          ${filters.salaryRange[0].toLocaleString()} - ${filters.salaryRange[1].toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
