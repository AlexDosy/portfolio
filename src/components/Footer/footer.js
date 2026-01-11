import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">© {new Date().getFullYear()} Built with ❤️ by <a href="https://github.com/alexdosy" target="_blank" rel="noopener noreferrer">alexdosy</a></div>
  </footer>
);

export default Footer;
