import React from "react";
import styles from "./ProjectsSection.module.css";
import ProjectCard from "./components/ProjectCard";
import $ from "jquery";

export default function ProjectsSection() {
  function toAbout() {
    $("#Projects").css({
      transform: "translateY(100vh)",
      opacity: "0",
    });
    $("#About").css({
      transform: "translateY(0)",
      opacity: "0.8",
    });
    setTimeout(() => {
      $("#Projects").hide();
      $("#About").show();
    }, 1000);
  }
  function toHome() {
    $("#Projects").css({
      transform: "translateY(100vh)",
      opacity: "0",
    });
    $("#Hero").css({
      transform: "translateY(0)",
      opacity: "0.8",
    });

    setTimeout(() => {
      $("#Projects").hide();
      $("#Hero").show();
    }, 1000);
  }
  return (
    <div id="Projects" style={{ display: "none" }}>
      <div className={styles.container}>
        <ProjectCard
          name="AgroFuture"
          descr="AgroFuture App: The AgroFuture app is a smart agricultural tool designed to empower farmers with critical information. It helps farmers analyze and predict weather patterns using advanced algorithms, ensuring they can make informed decisions about planting and harvesting. Additionally, the app provides detailed information on the latest hybrid seeds, including their benefits, optimal growing conditions, and yield potential, enabling farmers to maximize their crop production and stay updated with the latest agricultural innovations."
          stackArr={["Node", "Express", "EJS", "MongoDB", "HTML/CSS"]}
          cardStyle={styles.proj1}
        />
        <ProjectCard
          name="E-commerce {WIP}"
          descr="The E-commerce website is a full-stack app using Node.js, Express, React.js, and PostgreSQL. Node.js and Express handle the backend, managing user authentication, product management, and orders. React.js powers the dynamic frontend, while PostgreSQL manages product catalogs, user data, and transactions. RESTful APIs ensure smooth communication between the frontend and backend."
          stackArr={["Node", "Express", "React", "Postgres", "HTML/CSS"]}
          cardStyle={styles.proj2}
        />
        <ProjectCard
          name="OnRemote {WIP}"
          descr="OnRemote is an Inventory Management app built with Node.js, Express, React.js, and PostgreSQL. It simplifies and automates inventory tasks, with Node.js and Express managing backend operations and secure data transactions. The React.js frontend provides a user-friendly interface for real-time updates and analytics, while PostgreSQL ensures reliable data storage and retrieval. This full-stack solution offers a scalable approach to efficient inventory management."
          stackArr={["Node", "Express", "React", "Postgres", "HTML/CSS"]}
          cardStyle={styles.proj3}
        />
        <ProjectCard
          name="ShortIt API"
          descr="ShortIt API is a backend service for URL shortening, built with Node.js, Express, and MongoDB. It converts long URLs into shorter links and manages their creation, storage, and redirection. The API is lightweight and scalable, suitable for integration into larger systems or as a standalone service. MongoDB provides flexible and efficient data management in a NoSQL environment."
          stackArr={["Node", "Express", "Postgres", "HTML/CSS"]}
          cardStyle={styles.proj4}
        />
        <ProjectCard
          name="ToDo App"
          descr="Todo App is a task management application built with Node.js, Express, React.js, and PostgreSQL. Node.js and Express handle backend functions like user authentication and task management, while React.js offers a responsive frontend for managing tasks. PostgreSQL stores task data reliably and supports complex queries. The app is designed to be user-friendly and scalable, making task management efficient and straightforward."
          stackArr={["Node", "Express", "React", "Postgres", "HTML/CSS"]}
          cardStyle={styles.proj5}
        />
      </div>
      <div className={styles.navbar}>
        <button className={styles.navButton} onClick={toHome}>
          Home
        </button>
        <button className={styles.navButton} onClick={toAbout}>
          About
        </button>
        <button className={styles.navButton} disabled="true">
          Projects
        </button>
      </div>
    </div>
  );
}
