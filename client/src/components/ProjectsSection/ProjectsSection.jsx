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
          name="Football API"
          link="#"
          descr="Built using Golang and MongoDB, FootballAPI offers detailed data on players, clubs, and stadiums. While it doesn't provide real-time updates, it serves as a reliable source for integrating structured football information into applications."
          stackArr={["Go", "MongoDB"]}
          cardStyle={styles.proj1}
        />
        <ProjectCard
          name="E-commerce - ONGOING"
          link="#"
          descr="The E-commerce website is a full-stack app using Node.js, Express, React.js, and PostgreSQL. Node.js and Express handle the backend, managing user authentication, product management, and orders. React.js powers the dynamic frontend, while PostgreSQL manages product catalogs, user data, and transactions. RESTful APIs ensure smooth communication between the frontend and backend."
          stackArr={["Node", "Express", "React", "Postgres", "HTML/CSS"]}
          cardStyle={styles.proj2}
        />
        <ProjectCard
          name="Lapis oAuth"
          link="#"
          descr="Built with Golang and React, Lapis oAuth is a secure authentication service designed to simplify user login and authorization. It enables easy integration of third-party logins, ensuring seamless access management and data security for both users and developers."
          stackArr={["Go", "React", "Postgres"]}
          cardStyle={styles.proj3}
        />
        <ProjectCard
          name="ShortIt API"
          link="#"
          descr="ShortIt API is a backend service for URL shortening, built with Node.js, Express, and MongoDB. It converts long URLs into shorter links and manages their creation, storage, and redirection. The API is lightweight and scalable, suitable for integration into larger systems or as a standalone service. MongoDB provides flexible and efficient data management in a NoSQL environment."
          stackArr={["Node", "Express", "Postgres", "HTML/CSS"]}
          cardStyle={styles.proj4}
        />
        <ProjectCard
          name="TranspoHub"
          link="https://transpohub.vercel.app/"
          descr="We developed a freelance platform designed to connect transporters and contractors efficiently. The platform enables transporters to showcase their services and contractors to easily find and hire suitable transport solutions for their projects. Key features include profile management, service listings, and a streamlined communication system to facilitate contract negotiations. This platform aims to simplify the process of matching contractors with reliable transporters in the industry."
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
        <button className={styles.navButton} disabled={true}>
          Projects
        </button>
      </div>
    </div>
  );
}
