import React from "react";
import styles from "../AboutSection.module.css";

export default function AboutDetails() {
  return (
    <div className={styles.detailsContainer}>
      <p className="montserrat">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
        inventore incidunt eius delectus repudiandae, dolorum fuga voluptas
        eveniet magni consectetur? Molestiae placeat fugit, repellendus aliquid
        obcaecati tempora numquam tempore earum!
      </p>
      <p className="montserrat">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
        inventore incidunt eius delectus repudiandae, dolorum fuga voluptas
        eveniet magni consectetur? Molestiae placeat fugit, repellendus aliquid
        obcaecati tempora numquam tempore earum!
      </p>
      <hr />
      <div id={styles.nav}>
        <div>
          <button className={styles.navButton}>Home</button>
          <button className={styles.navButton} disabled="true">
            About
          </button>
          <button className={styles.navButton}>Projects</button>
        </div>
      </div>
    </div>
  );
}
