import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1 className={styles.subtitle}>{params.category}</h1>
      <div className={styles.content}>
        <div className={styles.descContainer}>
          <h1>Project Mine</h1>
          <p className={styles.desc}>
            I am ambrose mbithi ndone. Master in coding and I believe I will
            become a millionare through coding
          </p>
          <Button name="Go to site" url="" />
        </div>
        <div className={styles.image}>
          <Image
            src="/hero.png"
            fill={true}
            className={styles.img}
            alt="project1"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.descContainer}>
          <h1>Project Mine</h1>
          <p className={styles.desc}>
            I am ambrose mbithi ndone. Master in coding and I believe I will
            become a millionare through coding
          </p>
          <Button name="Go to site" url="" />
        </div>
        <div className={styles.image}>
          <Image
            src="/hero.png"
            fill={true}
            className={styles.img}
            alt="project1"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.descContainer}>
          <h1>Project Mine</h1>
          <p className={styles.desc}>
            I am ambrose mbithi ndone. Master in coding and I believe I will
            become a millionare through coding
          </p>
          <Button name="Go to site" url="" />
        </div>
        <div className={styles.image}>
          <Image
            src="/hero.png"
            fill={true}
            className={styles.img}
            alt="project1"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
