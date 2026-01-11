import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import About from '../About/about';
import Projects from '../Projects/projects';
import Contact from '../Contact/contact';
import Services from '../Services/services';

const Home = () => {
  return (
    <>
      <section id="home" className="home">
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
              <button className="btn secondary">Check out this cool 3D cube!</button>
            </Link>
          </div>
        </div>
      </section>

      <main>
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
    </>
  );
};

export default Home;
