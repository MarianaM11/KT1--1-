import React from "react";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className={styles.content}>
        <h2>Что мы предлагаем</h2>
        <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
      </div>
      <div className={styles.image}></div>
    </section>
  );
};

export default ServicesSection;