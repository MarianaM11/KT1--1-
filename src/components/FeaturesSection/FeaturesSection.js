import React from "react";
import styles from "./FeaturesSection.module.css";

const Feature = ({ title, color, link }) => {
  return (
    <a href={link} className={styles.feature} style={{ background: color }}>
      <div className={styles.line}></div>
      {title}
    </a>
  );
};

const FeaturesSection = () => {
  return (
    <section className={styles.features}>
      <Feature title="Годовое ТО" color="#1f3b80" link="#service1" />
      <Feature title="Выравнивание колес" color="#0044cc" link="#service2" />
      <Feature title="Настройка переключателей" color="#5ca37a" link="#service3" />
    </section>
  );
};

export default FeaturesSection;