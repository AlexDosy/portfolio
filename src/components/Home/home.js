import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I'm [Your Name]</h1>
      <p>Web Developer | Designer | Problem Solver</p>
      <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        Contact Me
      </button>
    </div>
  );
};

export default Home;
