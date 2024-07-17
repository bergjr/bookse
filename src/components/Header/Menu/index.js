import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import styles from './Menu.module.scss'
export default function Menu() {

  const menuIconProps = {
    size: '48px',
    color: '#002F52'
  }

  return (
    <div>
      <MdOutlineMenu {...menuIconProps} className={styles['menu-icon']}/>
    </div>
  );
}
