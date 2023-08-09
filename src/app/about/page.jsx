import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imageText}>
          <h1 className={styles.imgtitle}>Software Engineer</h1>
          <h2 className={styles.subtitle}>
            Giving you the best experience in the digital space
          </h2>
        </div>
      </div>

      <div className={styles.textContent}>
        <div className={styles.about}>
          <h1 className={styles.title}>Who am I?</h1>
          <p className={styles.desc}>
            As a dedicated and passionate software engineer, I derive great joy
            from solving problems and creating innovative solutions through
            writing code. Over the past three years, I have consistently pursued
            opportunities to learn new skills and stay updated with the
            ever-changing landscape of technology trends. My commitment to
            continuous improvement ensures that I bring the best of my abilities
            to every project I undertake.
            <br />
            <br /> My primary goal as a software engineer is to be highly
            effective in my work, collaborating with my team to achieve our
            shared objectives and deliver exceptional results. I find immense
            satisfaction in ensuring the utmost client satisfaction, and I
            always strive to exceed their expectations in every project .<br />
            <br />
            My work ethic is characterized by a strong sense of responsibility
            and self-motivation. I am proactive in managing my time, ensuring
            that I complete tasks well ahead of deadlines. My ability to work
            efficiently with minimal supervision enables me to adapt and excel
            in diverse work environments, allowing me to contribute effectively
            to any team.
            <br />
            <br /> Time management is a core strength of mine, as I understand
            the significance of every moment in our fast-paced industry. I
            prioritize tasks and optimize my efforts to make the most of my
            working hours. I believe that time once lost cannot be regained, and
            this drives me to make the most of every opportunity presented to
            me.
          </p>
        </div>
        <div className={styles.doings}>
          <h1 className={styles.title}> What I do?</h1>
          <p className={styles.desc}>
            As a software engineer, I am versatile and adaptable, capable of
            working on diverse projects spanning various aspects of web and
            software development. My skills in automation and data analysis
            further enhance my ability to optimize processes and derive valuable
            insights from data. My expertise in web scraping allows me to gather
            essential data from websites, providing valuable resources for
            further analysis and decision-making.
            <br />
            <br />
            -Proficient in web development, creating dynamic and responsive
            websites using HTML, CSS, JavaScript, and various front-end
            frameworks (React).
            <br />
            <br />
            -Skilled in back-end development, building robust and scalable
            server-side applications using programming languages like Python or
            Node.js, along with frameworks such as Django or Express.
            <br />
            <br />
            -Experienced in software development, designing and implementing
            software solutions for a wide range of applications, from small
            utilities to large-scale enterprise systems.
            <br />
            <br />
            -Proficient in automating repetitive tasks and workflows using
            scripting languages like Python or shell scripting, increasing
            productivity and reducing manual errors.
            <br />
            <br />
            -Competent in data analysis, utilizing tools like Pandas and NumPy
            in Python to process, clean, and analyze data sets, providing
            valuable insights and supporting data-driven decision-making.
            <br />
            <br />
            -Knowledgeable in web scraping, extracting and parsing data from
            websites using Python libraries like BeautifulSoup and Scrapy,
            enabling the collection of valuable information for various
            purposes.
            <br />
            <br />
            <Button url="/contact" name="Contact" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
