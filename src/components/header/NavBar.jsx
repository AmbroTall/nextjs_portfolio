"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Darkmode from "../darkMode/page";

const navlinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Portfolio", url: "/portfolio" },
  { id: 4, name: "About", url: "/about" },
  { id: 5, name: "Contact", url: "/contact" },
];

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Ambrose
      </Link>
      <div className={styles.links}>
        <Darkmode />
        {navlinks.map((link) => (
          <Link className={styles.navlinks} key={link.id} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
