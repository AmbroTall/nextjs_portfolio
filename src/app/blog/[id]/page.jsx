import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleImgContainer}>
        <div className={styles.titleImg}>
          <h1 className={styles.title}>
            Blog Post One Detail View. Ambrose joins one of the millionaires
            club.
          </h1>
          <p className={styles.subtitle}>
            Blog Post One Detail View. Ambrose joins one of the millionaires
            club.Blog Post One Detail View. Ambrose joins one of the
            millionaires club.Blog Post One Detail View. Ambrose joins one of
            the millionaires club.Blog Post One Detail View. Ambrose joins one
            of the millionaires club.Blog Post One Detail View. Ambrose joins
            one of the millionaires club.Blog Post One Detail View.{" "}
          </p>
          <div className={styles.imgContainer}>
            <div className={styles.image}>
              <Image
                src="/hero.png"
                fill={true}
                className={styles.img}
                alt="profile"
              />
            </div>
            <p>Ambrose Millionaire</p>
          </div>
        </div>
        <div className={styles.imageTitle}>
          <Image
            src="/hero.png"
            className={styles.imgTitle}
            fill={true}
            alt="profile"
          />
        </div>
      </div>
      <div className={styles.content}>
        <p>
          Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.Blog Post One Detail View. Ambrose joins one of the millionaires
          club.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
