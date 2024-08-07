import React from "react";
import styles from "../HeroSection.module.css";

export default function LogoBlock() {
  return (
    <div className={styles.logoBlock}>
      <div className={styles.LogoContainer}>
        <a>
          <img src="./img/icons8-linkedin.svg" className={styles.logo} />
        </a>
        <a>
          <img src="./img/github-mark-white.svg" className={styles.logo} />
        </a>
        <a>
          <img src="./img/icons8-document-50.png" className={styles.logo} />
        </a>
        <a>
          <img src="./img/pngaaa.com-6749427.png" className={styles.logo} />
        </a>
      </div>
    </div>
  );
}
