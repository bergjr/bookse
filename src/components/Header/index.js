import React from "react";
import styles from "./Header.module.scss";
import Menu from "./Menu";
import Logo from "./Logo";
import Icons from "./Icons";

export default function Header() {
  
  return (
    <header>
      <div className={styles.header}>
        <div className={styles['menu-logo-container']}>
          <Menu />
          <Logo />
        </div>
        <Icons />
      </div>
    </header>
  );
}
