import React from "react";
import styles from "../HeroSection.module.css";
import TitleCard from "./TitleCard/TitleCard";
import $ from 'jquery';

export default function TitleBlock() {

  function toAbout(){
    $('#Hero').hide();
    $('#About').show()
  }

  return (
    <div className={styles.titleBlock} id={styles.titleBlockTransition}>
      <div className={styles.TitleBlockTitleContainer}>
        <TitleCard title="Back-End Developer" special="true" />
        <TitleCard title="Front-End Developer" />
        <TitleCard title="Full-Stack Developer" special="true" />
        <TitleCard title="Software Developer" />
      </div>
      <br />
      <hr />
      <br />
      <div id={styles.nav}>
        <div>
          <button className={styles.navButton}>Home</button>
          <button className={styles.navButton} onClick={toAbout}>About</button>
          <button className={styles.navButton}>Projects</button>
        </div>
      </div>
    </div>
  );
}
