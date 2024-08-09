import React from "react";
import styles from "./AboutSection.module.css";
import ImageContainer from "./imageContainer.jsx/im/ImageContainer";
import AboutLocation from "./AboutLocation/AboutLocation";
import AboutDetails from "./AboutDetails/AboutDetails";
import QualityContainer from "./QualityContainer/QualityContainer";

export default function AboutSection() {
  return (
    <div className={styles.container} id="About" style={{ display: "none" }}>
      <ImageContainer />
      <AboutLocation />
      <QualityContainer />
      <AboutDetails />
    </div>
  );
}
