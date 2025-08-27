import React from 'react';
import './Testimonials.css';
import img1 from "./img1.jpeg"; // Replace with your image path
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    stars: 3.5,
    title: "Amazing services",
    feedback:
      "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis",
    name: "Marco Kihn",
    image: img1, // Put your own images
    role: "Happy Client",
  },
  {
    stars: 5,
    title: "Everything simple",
    feedback:
      "Mus etiam et vestibulum venenatis viverra ut. Eti morbi bibendum ullamcorper augue faucibus",
    name: "Kristin Hester",
    image: img1,
    role: "Happy Client",
  },
  {
    stars: 5,
    title: "Awesome, thank you!",
    feedback:
      "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Eti morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes",
    name: "Zion Cisneros",
    image: img1,
    role: "Happy Client",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonials from Our Customers</h2>
      <p className="testimonials-subtext">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...
      </p>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {"★".repeat(t.stars)}
            </div>
            <h4 className="testimonial-title">{t.title}</h4>
            <p className="testimonial-feedback">{t.feedback}</p>

            <div className="testimonial-footer">
              <div className="user-info">
                <img src={t.image} alt={t.name} className="user-img" />
                <div>
                  <p className="user-name">{t.name}</p>
                  <p className="user-role">{t.role}</p>
                </div>
              </div>
              <FaQuoteRight className="quote-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
