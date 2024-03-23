import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return( 
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/fyp_gambar_aku_crop-removebg-preview.png")} 
            alt="me standing"
            className={styles.aboutImage} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("about/frontend.png")} 
                    alt="HTML Icon" 
                    className={styles.aboutItemImage}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Fresh Graduated Frontend Developer</h3>
                        <p>I'm a graduate frontend student in multimedia 
                            computing seeking for learn a new knowledges</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("about/game.png")} 
                    alt="Game Icon" 
                    className={styles.aboutItemImage}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Game Developer</h3>
                        <p>I have experience developing basic game in unity, construct and scratch</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("about/ai.png")} 
                    alt="AI Icon"
                    className={styles.aboutItemImage} 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>A.I and ML Learner</h3>
                        <p>I have experience braille recognition using CNN for my Final Year Project</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};

export default About