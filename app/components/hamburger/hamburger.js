"use client";

import { useState } from "react";
import "./hamburger.css";
import Link from "next/link";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className={`ham_menu_main ${open ? "open" : ""}`}>
      <button className="hamburger-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div
        className={`hamburger-menu ${open ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <Link href="/">Home</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/membership">Membership</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {/* Add more links if needed */}
      </div>
    </div>
  );
};

export default HamburgerMenu;
