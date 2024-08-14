import React from "react";
import styles from "../HeroSection.module.css";
import TitleCard from "./TitleCard/TitleCard";
import $ from "jquery";

export default function TitleBlock() {
  function toAbout() {
    $("#Hero").css({
      transform: "translateY(100vh)",
      opacity: "0",
    });
    $("#About").css({
      transform: "translateY(0)",
      opacity: "0.8",
    });
    setTimeout(() => {
      $("#Hero").hide();
      $("#About").show();
    }, 1000);
  }

  function toProjects() {
    $("#Hero").css({
      transform: "translateY(100vh)",
      opacity: "0",
    });
    $("#Projects").css({
      transform: "translateY(0)",
      opacity: "0.8",
    });

    setTimeout(() => {
      $("#Hero").hide();
      $("#Projects").show();
    }, 1000);
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
          <button className={styles.navButton} disabled="true">
            Home
          </button>
          <button className={styles.navButton} onClick={toAbout}>
            About
          </button>
          <button className={styles.navButton} onClick={toProjects}>
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}
