import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.contentContainer} href="/blog/edtail">
        <div className={styles.image}>
          <Image
            src="/illustration.png"
            fill={true}
            className={styles.img}
            alt="blog"
          />
        </div>
        <div className={styles.descContainer}>
          <h1 className={styles.descTitle}>
            It shall come to be true. Very soon
          </h1>
          <p className={styles.desc}>
            Hello I am Ambrose Mbithi a young potentiol millionare. I must win .
            I will win. I will win
          </p>
        </div>
      </Link>
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <Image
            src="/illustration.png"
            fill={true}
            className={styles.img}
            alt="blog"
          />
        </div>
        <div className={styles.descContainer}>
          <h1 className={styles.descTitle}>
            It shall come to be true. Very soon
          </h1>
          <p className={styles.desc}>
            Hello I am Ambrose Mbithi a young potentiol millionare. I must win .
            I will win. I will win
          </p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <Image
            src="/illustration.png"
            fill={true}
            className={styles.img}
            alt="blog"
          />
        </div>
        <div className={styles.descContainer}>
          <h1 className={styles.descTitle}>
            It shall come to be true. Very soon
          </h1>
          <p className={styles.desc}>
            Hello I am Ambrose Mbithi a young potentiol millionare. I must win .
            I will win. I will win
          </p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <Image
            src="/illustration.png"
            fill={true}
            className={styles.img}
            alt="blog"
          />
        </div>
        <div className={styles.descContainer}>
          <h1 className={styles.descTitle}>
            It shall come to be true. Very soon
          </h1>
          <p className={styles.desc}>
            Hello I am Ambrose Mbithi a young potentiol millionare. I must win .
            I will win. I will win
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
