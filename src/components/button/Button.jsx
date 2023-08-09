import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Button = ({ url, name }) => {
  return (
    <div>
      <Link href={url}>
        <button className={styles.button}>{name}</button>
      </Link>
    </div>
  );
};

export default Button;
