import React from "react";
import styles from "../HeroSection.module.css";

export default function NameDetails() {
  return (
    <div className={styles.nameDetailsBlock}>
      <div>
        <h2 className="dancing-script">Lakshit Singh</h2>
        <h4
          className="bebas-neue-regular"
          style={{ textDecoration: "overline" }}
        >
          A Developer
        </h4>
      </div>
      <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
      <div>
        <img
          src="./img/icons8-location-64.png"
          style={{ width: "15%", height: "15%" }}
          alt="Location icon"
        />
        <span className="montserrat" style={{ fontSize: "12.5px" }}>
          {" "}
          Delhi, India.
        </span>
        <br />
        <h6 className="montserrat">Open to Remote</h6>
      </div>
      <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
      <div>
        <p className="montserrat" style={{ fontSize: "12.5px" }}>
          A passionate developer trying to gather as much knowledge as he can.
        </p>
      </div>
    </div>
  );
}
