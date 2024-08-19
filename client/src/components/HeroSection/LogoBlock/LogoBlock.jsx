import React from "react";
import styles from "../HeroSection.module.css";

export default function LogoBlock() {
  return (
    <div className={styles.logoBlock}>
      <div className={styles.LogoContainer}>
        <a href="https://www.linkedin.com/in/lakshit-singh-41583a287/">
          <img
            src="./img/icons8-linkedin.svg"
            className={styles.logo}
            alt="linkedin logo"
          />
        </a>
        <a href="https://github.com/NucleoFusion">
          <img
            src="./img/github-mark-white.svg"
            className={styles.logo}
            alt="github logo"
          />
        </a>
        <a href="https://drive.google.com/file/d/1rfKjqjlTU2FE495kBjtsDpwAKZENXeWX/view">
          <img
            src="./img/icons8-document-50.png"
            className={styles.logo}
            alt="resume icon"
          />
        </a>
        <a href="https://leetcode.com/u/NucleoFusion/">
          <img
            src="./img/pngaaa.com-6749427.png"
            className={styles.logo}
            alt="leetcode logo"
          />
        </a>
      </div>
    </div>
  );
}
