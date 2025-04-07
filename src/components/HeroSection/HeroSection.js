import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Веломастерская "Велозар"</h1>
        <p>Мы, мастера веломастерской «Велозар»,джльодл как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
      </div>
      <div className={styles.image}></div>
    </section>
  );
};

export default HeroSection;