// import React from 'react';
// import JobCard from './JobCard';
// import img1 from './img1.jpeg'; // your image path

// export default function Job({ extraClass = "" }) {
//   const jobList = [
//     {
//       postedAt: '10 min ago',
//     title: 'Forward Security Director',
//     company: 'Bauch, Schuppe and Schulist Co',
//     category: 'Hotels & Tourism',
//     type: 'Full time',
//     salary: '$40000–$42000',
//     location: 'New York, USA',
//     logo: img1 // use real image path
//     },
//     {
//       postedAt: '10 min ago',
//     title: 'Forward Security Director',
//     company: 'Bauch, Schuppe and Schulist Co',
//     category: 'Hotels & Tourism',
//     type: 'Full time',
//     salary: '$40000–$42000',
//     location: 'New York, USA',
//     logo: img1 // use real image path
//     },
//     {
//       postedAt: '10 min ago',
//     title: 'Forward Security Director',
//     company: 'Bauch, Schuppe and Schulist Co',
//     category: 'Hotels & Tourism',
//     type: 'Full time',
//     salary: '$40000–$42000',
//     location: 'New York, USA',
//     logo: img1 // use real image path
//     },
//     {
//       postedAt: '10 min ago',
//     title: 'Forward Security Director',
//     company: 'Bauch, Schuppe and Schulist Co',
//     category: 'Hotels & Tourism',
//     type: 'Full time',
//     salary: '$40000–$42000',
//     location: 'New York, USA',
//     logo: img1 // use real image path
//     },
//   ];

//   return (
//     <>
//         <div className={`recent-jobs-header ${extraClass}`}>
//             <h2 className="section-title">Recent Jobs Available</h2>
//             <button className="view-all-btn">View All</button>
//         </div>
//             {jobList.map((job) => (
//                 <JobCard key={job.id} job={job} />
//             ))}
//     </>
//   );
// }



import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import img1 from './img1.jpeg'; // fallback image
import { useNavigate } from 'react-router-dom';

export default function Job({ extraClass = "" }) {
  const [jobList, setJobList] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  fetch("https://689c2a8f58a27b18087d17b8.mockapi.io/Jobs") // your MockAPI link
    .then((res) => res.json())
    .then((data) => {
      const mappedJobs = data.map(job => ({
        postedAt: job.PostedAt,
        title: job.Title,
        company: job.CompanyName,
        category: job.category || "General",
        type: job.type || "Full time",
        salary: `$${job.Salary}`,
        location: job.Location,
        logo: job.Image || img1,
        description: job.description
      }));

      // Only take the first 8 jobs
      setJobList(mappedJobs);
    })
    .catch((err) => console.error("Error fetching jobs:", err));
}, []);

  return (
    <div className='Jobsection'>
      <div className={`recent-jobs-header ${extraClass}`}>
        <h2 className="section-title">Recent Jobs Available</h2>
        <button className="view-all-btn" onClick={() => navigate("/jobs")} >View All</button>
      </div>

      {jobList.length > 0 ? (
        jobList.map((job, index) => (
          <JobCard key={index} job={job} />
        ))
      ) : (
        <p>Loading jobs...</p>
      )}
    </div>
  );
}
