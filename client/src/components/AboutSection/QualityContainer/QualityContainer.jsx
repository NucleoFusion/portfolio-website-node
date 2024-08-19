import React from "react";
import styles from "../AboutSection.module.css";

export default function QualityContainer() {
  return (
    <div className={styles.qualityContainer}>
      <p className="montserrat">
        I excel in <span>critical thinking</span> and{" "}
        <span>problem-solving</span>, quickly learning and adapting to new
        challenges. My attention to detail ensures thorough work, while my
        strong <span>communication and teamwork skills</span> help me
        collaborate effectively. I'm <span>curious and open-minded</span>,
        always eager to explore new ideas and adapt to changing environments.
      </p>
    </div>
  );
}
