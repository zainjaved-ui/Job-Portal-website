import React from 'react';
import './TopCompanies.css'; // We'll create this CSS file next

const TopCompanies = () => {
  const companies = [
  {
    name: "Instagram",
    description: "Ett watt mauris atiquan est diam. Leo sagittis consectetur diam mordi erat",
    jobs: 3,
    logo: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png" // Instagram
  },
  {
    name: "Tesla",
    description: "At polterereque amet odio crus imperdiet nisi. Ac magna aliquet massa leo",
    jobs: 18,
    logo: "https://cdn.iconscout.com/icon/free/png-256/tesla-18-722713.png" // Tesla
  },
  {
    name: "Nike",
    description: "Odio aliquet tellus tellus maecenas. Facubius in viverra verenatis phasellus",
    jobs: 12,
    logo: "https://cdn-icons-png.flaticon.com/512/732/732229.png" // McDonald's
  },
  {
    name: "Apple",
    description: "Et odio sem tellus ultricus posuace consequasi. Tristique nascetur sapien",
    jobs: 9,
    logo: "https://cdn-icons-png.flaticon.com/512/179/179309.png" // Apple
  }
];


  return (
    <section className="top-companies">
        <h2 className="section-title">Top Company</h2>
        <p className="section-subtitle">
          As en lobortis preitum incidunt amet lectu et veniam aliquet. Bunstit a massa elementum.
        </p>
      <div className="companies-list">
        {companies.map((company, index) => (
            <div key={index} className="company-card">
            <div className="company-header">
                <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
                <h3 className="company-name">{company.name}</h3>
            </div>
            <p className="company-description">{company.description}</p>
            <div className="jobs-count">{company.jobs} open jobs</div>
            <div className="divider"></div>
            </div>
        ))}
      </div>

    </section>
  );
};

export default TopCompanies;