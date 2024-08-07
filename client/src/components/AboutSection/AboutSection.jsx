import React from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.container} id="About" style={{ display: "none" }}>
      <div className={styles.imageContainer}></div>
      <div className={styles.aboutLocationContainer}></div>
      <div className={styles.qualityContainer}></div>
      <div className={styles.detailsContainer}></div>
    </div>
  );
}
