import React  from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return( 
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Iqmal Habib</h1>
      <p className={styles.description}>I'm a fresh graduate student seeking job 
      related with multimedia computing.
      </p>
      <a href="mailto:iqmalhabib11@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/mukabulatbgblue.png")} alt="my image" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  );
};

