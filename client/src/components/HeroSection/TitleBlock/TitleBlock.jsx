import React from "react";
import styles from "../HeroSection.module.css";
import TitleCard from "./TitleCard/TitleCard";

export default function TitleBlock() {
  return (
    <div className={styles.titleBlock} identifier="hello">
      <div className={styles.TitleBlockTitleContainer}>
        <TitleCard title="Back-End Developer" special="true" />
        <TitleCard title="Front-End Developer" />
        <TitleCard title="Full-Stack Developer" special="true" />
        <TitleCard title="Software Developer" />
      </div>
      <hr />
      <br />
      <div id={styles.nav}>
        <div>
          <button className={styles.navButton}>Home</button>
          <button className={styles.navButton}>About</button>
          <button className={styles.navButton}>Projects</button>
        </div>
      </div>
    </div>
  );
}
