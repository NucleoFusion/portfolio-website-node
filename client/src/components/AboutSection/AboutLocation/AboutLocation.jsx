import React from "react";
import styles from "../AboutSection.module.css";
export default function AboutLocation() {
  return (
    <div className={styles.aboutLocationContainer}>
      <span>
        <img
          src="./img/icons8-location-64.png"
          style={{
            width: "2vw",
            height: "2vw",
            marginBottom: "2vh",
          }}
          alt="Location icon"
        />
      </span>
      <span
        className="bebas-neue-regular"
        style={{
          marginLeft: ".75vw",
          fontSize: "4vh",
        }}
      >
        {"    "}
        Delhi, India.
      </span>
      <span
        className="bebas-neue-regular"
        style={{
          marginLeft: "2vw",
          fontSize: "3vh",
          textDecoration: "underline",
        }}
      >
        Open To Remote Work Worldwide
      </span>
    </div>
  );
}
