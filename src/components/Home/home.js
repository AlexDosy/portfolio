import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I'm Alex D V</h1>
      <p>Web Developer | Designer | Problem Solver</p>
      <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        Contact Me
      </button>
      <Link to="/three-scene">
        <button >Check out this cool 3D cube below!</button>
      </Link>
          </div>
  );
};


export default Home;
