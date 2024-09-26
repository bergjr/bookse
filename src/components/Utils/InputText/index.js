import React from "react";
import styles from "./InputText.module.scss";
import { MdOutlineSearch, MdOutlineMail, MdOutlineEmail } from "react-icons/md";

export default function InputText({
  children,
  placeholder,
  icon = "white",
  color = "",
}) {
  return (
    <>
      <div
        className={`${styles["box-input"]} ${
          color === "blue"
            ? styles["box-input--blue"]
            : styles["box-input--white"]
        }`}
      >
        <div className={styles.icon}>
          {icon === "email" ? (
            <MdOutlineSearch color="#FFFFFF" size={24} />
          ) : (
            <MdOutlineEmail color="#002F52" size={24} />
          )}
        </div>
        <input type="text" placeholder={placeholder} name="" id="" />
      </div>
    </>
  );
}
