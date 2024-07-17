import React from "react";
import styles from "./BoxDisplayBook.module.scss";
import Button from "components/Utils/Button";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";

export default function BoxDisplayBook() {
  return (
    <div className={styles.flex}>
      <div className={styles.box}>
        <h3>Sobre o livro:</h3>
        <h2>Nome do Livro</h2>
        <p>Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum</p>
        <p>Por: Vitor Varani</p>
        <p className={styles.menor}>
          A partir de: <span className={styles.price}>R$ 29,90</span>
        </p>
        <div className={styles["box-buttons"]}>
          <div className={styles.icons}>
            <FaRegHeart className={styles.icon} />
            <AiOutlineShopping className={styles.icon} />
          </div>
          <div className={styles.button}>
            <Button color="yellow">Comprar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
