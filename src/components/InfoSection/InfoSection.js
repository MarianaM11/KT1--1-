import React from "react";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={styles.info}>
      <div className={styles.content}>
        <p>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</p>
        <p>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
      </div>
    </section>
  );
};

export default InfoSection;