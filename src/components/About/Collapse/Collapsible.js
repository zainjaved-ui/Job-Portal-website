import React, { useState } from 'react';
import './Collapsible.css';

const CollapsibleFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

 const faqItems = [
    {
      question: "How do I create an account?",
      answer: "Click on the 'Sign Up' button in the top right corner and follow the instructions to create your account."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers."
    },
    {
      question: "How can I reset my password?",
      answer: "Go to the login page and click 'Forgot Password'. You'll receive an email with reset instructions."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all our products."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us 24/7 through our live chat or by emailing support@example.com."
    },
    {
      question: "Where are your servers located?",
      answer: "Our servers are located in secure data centers across North America, Europe, and Asia."
    }
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-items">
        {faqItems.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <button 
              className="faq-question" 
              onClick={() => toggleItem(index)}
              aria-expanded={activeIndex === index}
            >
              <h3>{item.question}</h3>
              <div className="faq-toggle">
                <div className={`icon ${activeIndex === index ? 'close-icon' : 'plus-icon'}`}></div>
              </div>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleFAQ;