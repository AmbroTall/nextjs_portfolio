"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Darkmode from "../darkMode/page";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navlinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Portfolio", url: "/portfolio" },
  { id: 4, name: "About", url: "/about" },
  { id: 5, name: "Contact", url: "/contact" },
];

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Ambrose
      </Link>
      <div ref={navRef} className={styles.links}>
        <Darkmode />
        {navlinks.map((link) => (
          <Link className={styles.navlinks} key={link.id} href={link.url}>
            {link.name}
          </Link>
        ))}

        <button className={styles.navBtnCls} onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>

      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
