import React from "react";
import styles from "../AboutSection.module.css";
import $ from "jquery";

export default function AboutDetails() {
  function toHome() {
    $("#About").css({
      transform: "translateY(100vh)",
      opacity: "0",
    });
    $("#Hero").css({
      transform: "translateY(0)",
      opacity: "0.8",
    });

    setTimeout(() => {
      $("#About").hide();
      $("#Hero").show();
    }, 1000);
  }

  function toProjects() {
    $("#About").css({
      transform: "translateY(100vh)",
      opacity: "0",
    });
    $("#Projects").css({
      transform: "translateY(0)",
      opacity: "0.8",
    });

    setTimeout(() => {
      $("#About").hide();
      $("#Projects").show();
    }, 1000);
  }

  return (
    <div className={styles.detailsContainer}>
      <p className="montserrat" style={{ fontSize: "small" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
        inventore incidunt eius delectus repudiandae, dolorum fuga voluptas
        eveniet magni consectetur? Molestiae placeat fugit, repellendus aliquid
        obcaecati tempora numquam tempore earum!
      </p>
      <p className="montserrat" style={{ fontSize: "small" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
        inventore incidunt eius delectus repudiandae, dolorum fuga voluptas
        eveniet magni consectetur? Molestiae placeat fugit, repellendus aliquid
        obcaecati tempora numquam tempore earum!
      </p>
      <br />
      <br />
      <div id={styles.nav}>
        <div>
          <button className={styles.navButton} onClick={toHome}>
            Home
          </button>
          <button className={styles.navButton} disabled="true">
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
