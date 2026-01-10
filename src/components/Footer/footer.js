import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">© {new Date().getFullYear()} Alex D V — Built with React</div>
  </footer>
);

export default Footer;
