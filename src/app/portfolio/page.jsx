import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.subtitle}>Choose a gallery</h2>
      <div className={styles.categories}>
        <Link href="/portfolio/illustrations" className={styles.card}>
          <h1>Illustrastions</h1>
        </Link>
        <Link href="/portfolio/websites" className={styles.card}>
          <h1>Websites</h1>
        </Link>
        <Link href="/portfolio/applications" className={styles.card}>
          <h1>Applications</h1>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
