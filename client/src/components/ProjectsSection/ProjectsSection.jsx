import React from "react";
import styles from "./ProjectsSection.module.css";
import ProjectCard from "./components/ProjectCard";

export default function ProjectsSection() {
  return (
    <div className={styles.container} id="Projects" style={{ display: "none" }}>
      <ProjectCard
        name="AgroFuture"
        descr="something"
        stackArr={["Node", "Express", "EJS", "MongoDB", "HTML/CSS"]}
        cardStyle={styles.proj1}
      />
      <ProjectCard
        name="E-commerce {WIP}"
        descr="something"
        stackArr={["Node", "Express", "React", "Postgres", "HTML/CSS"]}
        cardStyle={styles.proj2}
      />
      <ProjectCard
        name="OnRemote {WIP}"
        descr="something"
        stackArr={["Node", "Express", "React", "Postgres", "HTML/CSS"]}
        cardStyle={styles.proj3}
      />
      <ProjectCard
        name="ShortIt API"
        descr="something"
        stackArr={["Node", "Express", "Postgres", "HTML/CSS"]}
        cardStyle={styles.proj4}
      />
      <ProjectCard
        name="ToDo App"
        descr="something"
        stackArr={["Node", "Express", "React", "Postgres", "HTML/CSS"]}
        cardStyle={styles.proj5}
      />
    </div>
  );
}
