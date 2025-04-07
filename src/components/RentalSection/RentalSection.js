import React from "react";
import styles from "./RentalSection.module.css";

const RentalSection = () => {
  return (
    <section className={styles.rental}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h2>Прокат велосипедов</h2>
        <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
      </div>
    </section>
  );
};

export default RentalSection;