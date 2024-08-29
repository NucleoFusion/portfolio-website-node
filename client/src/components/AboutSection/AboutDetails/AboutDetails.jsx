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
      <p className="montserrat">
        I am a dedicated and detail-oriented software developer with a strong
        passion for problem-solving and learning. With over two years of project
        experience in backend development, I enjoy taking on complex challenges
        and finding efficient solutions. I am committed to delivering
        high-quality work and always strive to ensure that every project I work
        on meets the highest standards. I also believe in the power of teamwork
        and communication, knowing that the best results come from working well
        with others.
      </p>
      <p className="montserrat">
        I am adaptable and always eager to learn new technologies and
        approaches. This curiosity keeps me updated with the latest industry
        trends, allowing me to bring fresh ideas to my projects. I am
        particularly interested in how software can shape the future of work and
        improve our daily lives. My goal is to create solutions that not only
        meet current needs but also prepare for future challenges.
      </p>
      <div id={styles.nav}>
        <div>
          <button className={styles.navButton} onClick={toHome}>
            Home
          </button>
          <button className={styles.navButton} disabled={true}>
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
