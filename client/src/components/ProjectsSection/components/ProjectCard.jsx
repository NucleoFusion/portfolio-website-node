import React from "react";
import styles from "../ProjectsSection.module.css";

export default function ProjectCard(props) {
  return (
    <div className={`bebas-neue-regular ${styles.cardStyle}`}>
      <div>
        <div>
          <h1>
            <a href={props.link}>{props.name}</a>
          </h1>
        </div>
        <div>
          <p className="montserrat">{props.descr}</p>
        </div>
        <div>
          <ul className="montserrat">
            {props.stackArr.map((obj) => {
              return <li key={props.stackArr.indexOf(obj)}>{obj}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
