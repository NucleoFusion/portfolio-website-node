import React from "react";
import styles from "../HeroSection.module.css";

export default function NameDetails() {
  return (
    <div className={styles.nameDetailsBlock}>
      <div>
        <h2 className="dancing-script" style={{fontSize: '4.5vh'}}>Lakshit Singh</h2>
        <h4
          className="bebas-neue-regular"
          style={{ 
            fontSize: '3.5vh'
          }}
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
        <span className="montserrat" style={{ fontSize: "2vh" }}>
          {" "}
          Delhi, India.
        </span>
        <br />
        <h6 className="montserrat" style={{fontSize: '1.75vh'}}>Open to Remote</h6>
      </div>
      <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
      <div>
        <p className="montserrat" style={{ fontSize: "2vh" }}>
          A passionate developer trying to gather as much knowledge as he can.
        </p>
      </div>
    </div>
  );
}
