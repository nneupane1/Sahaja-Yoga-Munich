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
          <li className="nav-item-with-dropdown">
            <a href="#aktuelles">Aktuelles / Kontakt <span className="dropdown-arrow">▼</span></a>
          </li>
          <li className="nav-item-with-dropdown">
            <a href="#warum">Warum meditieren <span className="dropdown-arrow">▼</span></a>
          </li>
          <li className="nav-item-with-dropdown">
            <a href="#wie">Wie meditieren <span className="dropdown-arrow">▼</span></a>
          </li>
          <li className="nav-item-with-dropdown">
            <a href="#wo">Wo meditieren <span className="dropdown-arrow">▼</span></a>
          </li>
          <li className="nav-item-with-dropdown">
            <a href="#sy-kultur">SY-Kultur <span className="dropdown-arrow">▼</span></a>
          </li>
          <li className="nav-item-with-dropdown">
            <a href="#blog">Blog <span className="dropdown-arrow">▼</span></a>
          </li>
          <li className="nav-item-with-dropdown">
            <a href="#ressourcen">Ressourcen <span className="dropdown-arrow">▼</span></a>
          </li>
          <li className="nav-item-with-dropdown">
            <a href="#organisation">Organisation <span className="dropdown-arrow">▼</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
