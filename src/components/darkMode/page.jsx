import React, { useContext } from "react";
import styles from "./page.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Darkmode = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.emoji}>🌞</div>
      <div className={styles.emoji}>&#127769;</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Darkmode;
