import React, { useEffect } from "react";
import styles from "../HeroSection.module.css";
import $ from "jquery";

export default function StackBlock() {

  function dependencyDropdown() {
    $(`.${styles.titleBlock}`).css({
      transform: "translateX(-20vw)",
      opacity: 0,
    });
    $(`.${styles.dependencyDropdown}`).css({'visibility': "visible", 'opacity': 1});
  }

  function hideDropdown(){
    $(`.${styles.dependencyDropdown}`).css({'visibility': "hidden", 'opacity': 0});
    $(`.${styles.titleBlock}`).css({
      transform: "translateX(0)",
      opacity: 0.8,
      display: 'inline-block'
    });
    $(`.${styles.titleBlock}`).on({
      mouseenter:function (){
        $(this).css(
          {
            transform: 'scale(1.04)',
            opacity: 1
          })
        },
        mouseleave: function (){
          $(this).css(
            {
              transform: 'scale(1)',
              opacity: 0.8
            })
          }
    });
  }

  return (
    <div className={styles.stackBlock}>
      <img
        src="./img/stacklogo/javascript-logo-svgrepo-com.svg"
        className={styles.stacklogo}
        alt="javascript logo"
      />
      <img
        src="./img/stacklogo/Python-logo-notext.svg"
        className={styles.stacklogo}
        alt="python logo"
      />
      <img
        src="./img/stacklogo/c.svg"
        className={styles.stacklogo}
        alt="C++ logo"
      />
      <img
        src="./img/stacklogo/CSS3_logo_and_wordmark.svg"
        className={styles.stacklogo}
        alt="CSS Logo"
      />
      <img
        src="./img/stacklogo/html-1.svg"
        className={styles.stacklogo}
        alt="HTML logo"
      />
      <img
        src="./img/stacklogo/nodejs-icon.svg"
        className={styles.stacklogo}
        alt="Node.js logo"
      />
      <img
        src="./img/stacklogo/react-svgrepo-com.svg"
        className={styles.stacklogo}
        alt="React logo"
      />
      <img
        src="./img/stacklogo/flask.png"
        className={styles.stacklogo}
        alt="flask logo"
      />
      <img
        src="./img/stacklogo/postgresql-icon.svg"
        className={styles.stacklogo}
        alt="postgresql logo"
      />
      <img
        src="./img/stacklogo/mongodb-icon.svg"
        className={styles.stacklogo}
        alt="MongoDB logo"
      />
      <button onClick={dependencyDropdown}>
        <img src="./img/icons8-arrow-down-50.png" style={{ height: "30px" }} />
      </button>
      <div className={styles.dependencyDropdown}>
        <ul>
          <h5>Some Common Dependencies :-</h5>
          <li>axios</li>
          <li>cors</li>
          <li>express</li>
          <li>react-router-dom</li>
          <li>passport</li>
          <li>bcrypt</li>
          <li>jquery</li>
          <li>jscookie</li>
          <li>jsonwebtoken</li>
          <button style={{color:'#abb2bf'}} onClick={hideDropdown}>Close</button>
        </ul>
      </div>
    </div>
  );
}
