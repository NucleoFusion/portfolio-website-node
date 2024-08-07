import React from "react";
import styles from "./HeroSection.module.css";
import NameDetails from "./NameDetails/NameDetails";
import LogoBlock from "./LogoBlock/LogoBlock";
import StackBlock from "./StackBlock/StackBlock";
import TitleBlock from "./TitleBlock/TitleBlock";

export default function HeroSection() {
  return (
    <div className={styles.container} id='Hero'>
      <NameDetails />
      <LogoBlock />
      <StackBlock />
      <TitleBlock />
    </div>
  );
}
