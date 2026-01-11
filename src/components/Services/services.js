import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-list">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Building responsive single-page applications with React.</p>
        </div>

        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Designing clean, accessible interfaces and prototypes.</p>
        </div>

        <div className="service-card">
          <h3>Performance Optimization</h3>
          <p>Improving site speed, accessibility, and best practices.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
