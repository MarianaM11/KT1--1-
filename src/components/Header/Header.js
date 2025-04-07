import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <nav className={styles.nav}>
        <a href="#about">О нас</a>
        <a href="#services">Услуги</a>
        <a href="#rental">Аренда</a>
      </nav>
      <button className={styles.contactButton}>Контакты</button>
    </header>
  );
};

export default Header;