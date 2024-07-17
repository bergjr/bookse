import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import styles from './Icons.module.scss';
export default function Icons() {

  return (
    <ul className={styles.icons}>
      <li>
        <FaRegHeart className={styles.icon} />
      </li>
      <li>
        <AiOutlineShopping className={styles.icon} />
      </li>
      <li>
        <CgProfile className={styles.icon}  />
      </li>
    </ul>
  );
}
