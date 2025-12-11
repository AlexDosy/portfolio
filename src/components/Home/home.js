import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* animated background layer */}
      <div className="gradient-bg" />

      {/* decorative floating blobs */}
      <div className="blobs" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <div className="home-content">
        <h1 className="fadeIn">Hi, I'm Alex D V</h1>
        <p className="fadeIn delay-1">Web Developer | Designer | Problem Solver</p>

        <div className="actions fadeIn delay-2">
          <Link to="/contact" aria-label="Go to contact">
            <button className="btn contact">Contact Me</button>
          </Link>

          <Link to="/three-scene" aria-label="Go to 3D scene">
            <button className="btn secondary">Check out this cool 3D cube below!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
