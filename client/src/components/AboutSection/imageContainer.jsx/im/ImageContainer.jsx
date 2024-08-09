import React from "react";
import styles from "../../AboutSection.module.css";

export default function ImageContainer() {
  return (
    <div className={styles.imageContainer}>
      <img src="./img/mypic.jpg" width={"100%"} height={"100%"} />
    </div>
  );
}
