import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out for collaborations, projects, or just to say hi!
      </p>
      <ul>
        <li>
          <strong></strong>{' '}
          <a href="mailto:alexdosyv210@gmail.com">Email</a>
        </li>
        <li>
          <strong></strong>{' '}
          <a href="https://www.linkedin.com/in/alexdosy" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <strong></strong>{' '}
          <a href="https://github.com/alexdosy" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
