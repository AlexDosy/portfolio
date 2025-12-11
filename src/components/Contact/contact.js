import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out for collaborations, projects, or just to say hi!
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:alexdosyv210@gmail.com">alexdosyv210@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/alexdosy" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/alexdosy
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/alexdosy" target="_blank" rel="noopener noreferrer">
            github.com/alexdosy
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
