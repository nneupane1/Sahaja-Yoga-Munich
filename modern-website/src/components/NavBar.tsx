import React from 'react';

/**
 * A simple navigation bar. It remains sticky at the top of the page and provides
 * anchor links to the different sections of the landing page.
 */
const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Branding */}
        <a href="#" className="logo">
          Sahaja Yoga Munich
        </a>
        {/* Primary navigation links */}
        <ul className="nav-links">
          <li>
            <a href="#intro">Was ist Sahaja Yoga?</a>
          </li>
          <li>
            <a href="#features">Merkmale</a>
          </li>
          <li>
            <a href="#sessions">Sitzungen</a>
          </li>
          <li>
            <a href="#about">Über uns</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
