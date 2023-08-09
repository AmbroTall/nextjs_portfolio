import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Building Tomorrow's World. Transforming Ideas into Innovative
          Solutions
        </h1>
        <p className={styles.desc}>
          Transforming Ideas into Reality. Unveiling the Passionate Journey of a
          Software and Full Stack Engineer.
        </p>
        <Button url="/portfolio" name="See my works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.image} alt="hero" />
      </div>
    </div>
  );
};

export default page;
