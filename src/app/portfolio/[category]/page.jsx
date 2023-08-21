"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { projects } from "../projects";
import Link from "next/link";

const Category = ({ params }) => {
  const [projo, setProjo] = useState([]);
  useEffect(() => {
    const data = projects?.filter((x) => x?.category === params?.category);
    setProjo(data);
  }, [params.category]);
  return (
    <div>
      <h1 className={styles.subtitle}>
        {params.category === "contributions"
          ? "Corporate Projects"
          : params.category}
      </h1>

      {projo?.map((item) => (
        <div className={styles.content} key={item.id}>
          <div className={styles.descContainer}>
            <h1>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Link target="_blank" href={item.link}>
              <button className={styles.button}>Go to site</button>
            </Link>
          </div>
          <div className={styles.image}>
            <Image
              src={item.image}
              fill={true}
              className={styles.img}
              alt={item.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
