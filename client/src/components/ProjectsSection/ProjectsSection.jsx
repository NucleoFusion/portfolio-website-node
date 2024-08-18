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
          descr="The E-commerce website is a full-stack application built using Node.js, Express, React.js, and PostgreSQL. The backend is powered by Node.js and Express, providing a robust and scalable API for handling user authentication, product management, and order processing. React.js is used for the frontend, offering a dynamic and responsive user interface. PostgreSQL serves as the relational database, efficiently managing product catalogs, user data, and transaction records. The application integrates RESTful APIs for seamless communication between the frontend and backend, ensuring a smooth and intuitive shopping experience."
          stackArr={["Node", "Express", "React", "Postgres", "HTML/CSS"]}
          cardStyle={styles.proj2}
        />
        <ProjectCard
          name="OnRemote {WIP}"
          descr="**OnRemote** is an Inventory Management app designed to streamline and automate business processes. Built with a full-stack architecture using Node.js, Express, React.js, and PostgreSQL, the app provides a seamless interface for managing inventory, tracking stock levels, and processing orders. The backend, powered by Node.js and Express, handles complex business logic and secure data transactions, while the React.js frontend offers a user-friendly interface for real-time inventory updates and analytics. PostgreSQL is used as the database, ensuring reliable data storage and retrieval, making OnRemote a scalable solution for efficient inventory management."
          stackArr={["Node", "Express", "React", "Postgres", "HTML/CSS"]}
          cardStyle={styles.proj3}
        />
        <ProjectCard
          name="ShortIt API"
          descr="**ShortIt API** is a backend service for URL shortening, developed using Node.js, Express, and MongoDB. It efficiently converts long URLs into shorter, shareable links while managing the creation, storage, and redirection of these URLs. The API is designed to be lightweight and scalable, making it suitable for integration into larger systems or as a standalone service. MongoDB is utilized for storing URL data, allowing for flexible and efficient data management in a NoSQL environment."
          stackArr={["Node", "Express", "Postgres", "HTML/CSS"]}
          cardStyle={styles.proj4}
        />
        <ProjectCard
          name="ToDo App"
          descr="Todo App is a task management application built using Node.js, Express, React.js, and PostgreSQL. The backend, powered by Node.js and Express, manages user authentication, task creation, updates, and deletion, ensuring secure and efficient handling of user data. React.js is used on the frontend to provide a responsive and interactive interface where users can easily manage their tasks. PostgreSQL serves as the relational database, storing task data with reliability and supporting complex queries for organizing and retrieving tasks. The app is designed to be user-friendly and scalable, making task management straightforward and efficient."
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
