import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

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
        <div className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="" name="Submit" />
        </div>
      </div>
      <div className={styles.contactDetails}>
        <p>
          Email:{" "}
          <a href="mailto:ambrosetall@gmail.com">ambrosetall@gmail.com</a>
        </p>
        <p>
          Contact: <a href="tel:+254722808670">+254722808670</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
