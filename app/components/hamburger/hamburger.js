'use client';

import { useState } from 'react';
import './hamburger.css';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
  
    const toggleMenu = () => setOpen(!open);
  
    return (
      <div>
        <button className="hamburger-toggle" onClick={toggleMenu}>
          ☰
        </button>
  
        <div className={`hamburger-menu ${open ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          {/* Add more links if needed */}
        </div>
      </div>
    );
  };
  
  export default HamburgerMenu;