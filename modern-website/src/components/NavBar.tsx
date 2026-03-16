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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aktuelles">Aktuelles / Kontakt</a>
          </li>
          <li>
            <a href="#warum">Warum meditieren</a>
          </li>
          <li>
            <a href="#wie">Wie meditieren</a>
          </li>
          <li>
            <a href="#wo">Wo meditieren</a>
          </li>
          <li>
            <a href="#sy-kultur">SY-Kultur</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#ressourcen">Ressourcen</a>
          </li>
          <li>
            <a href="#organisation">Organisation</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
