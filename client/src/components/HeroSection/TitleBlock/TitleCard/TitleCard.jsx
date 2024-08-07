import React from "react";
import styles from "../../HeroSection.module.css";

export default function TitleCard(props) {
  return (
    <div className={styles.TitleCardContainer}>
      <h5>{props.title}</h5>
      {props.special ? (
        <img className={styles.starTitle} src="./img/icons8-star-96.png" />
      ) : (
        <></>
      )}
    </div>
  );
}
