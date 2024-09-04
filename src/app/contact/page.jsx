import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt="contact"
            className={styles.img}
          />
        </div>
        <div className={styles.contactDetails}>
          <p>
            Email:{" "}
            <a href="mailto:ambrosetall@gmail.com">ambrosetall@gmail.com</a>
          </p>
          <p>
            Contact: <a href="tel:+254722808670">+254722808670</a>
          </p>
          <p className={styles.message}>
            I am a Senior Software Engineer offering cutting-edge software
            solutions. Whether you need a robust backend, a dynamic frontend, or
            full-stack development, I&apos;m here to help bring your vision to
            life. Let&apos;s work together to create something amazing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
