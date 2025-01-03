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
          <a href="mailto:yourname@example.com">yourname@example.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourname
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            github.com/your-username
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
