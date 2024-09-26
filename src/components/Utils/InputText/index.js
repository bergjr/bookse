import React from "react";
import styles from "./InputText.module.scss";
import { MdOutlineSearch } from "react-icons/md";
export default function InputText({children, placeholder = ''}) {
  return (
    <div className={styles["box-input"]}>
      <MdOutlineSearch color="blue" size={24} />
      <input
        type="text"
        placeholder="Qual será sua próxima leitura?"
        name=""
        id=""
      />
    </div>
  );
}
