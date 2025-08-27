import React from 'react';
import './Hworks.css';

const Hworks = () => {
  const steps = [
    {
      name: "Create an account",
      description: "Ett watt mauris atiquan est diam. Leo sagittis consectetur diam mordi erat",
      jobs: 3,
      logo: "https://cdn-icons-png.flaticon.com/512/747/747376.png" // Account icon
    },
    {
      name: "Upload Resume",
      description: "At polterereque amet odio crus imperdiet nisi. Ac magna aliquet massa leo",
      jobs: 18,
      logo: "https://cdn-icons-png.flaticon.com/512/942/942748.png" // Upload document icon
    },
    {
      name: "Find Jobs",
      description: "Odio aliquet tellus tellus maecenas. Facubius in viverra verenatis phasellus",
      jobs: 12,
      logo: "https://cdn-icons-png.flaticon.com/512/3064/3064823.png" // Search icon
    },
    {
      name: "Apply Jobs",
      description: "Et odio sem tellus ultricus posuace consequasi. Tristique nascetur sapien",
      jobs: 9,
      logo: "https://cdn-icons-png.flaticon.com/512/942/942748.png" // Submit icon
    }
  ];

  return (
    <section className="how-it-works">
      <h2 className="section-title">How it works</h2>
      <p className="section-subtitle">
        As en lobortis preitum incidunt amet lectu et veniam aliquet. Bunstit a massa elementum.
      </p>
      <div className="steps-list">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-header">
              <img src={step.logo} alt={`${step.name} logo`} className="step-logo" />
              <h3 className="step-name">{step.name}</h3>
            </div>
            <p className="step-description">{step.description}</p>
            <div className="step-jobs">{step.jobs} open jobs</div>
            <div className="step-divider"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hworks;
