import React from "react";
import styles from "./News.module.scss";
import Button from "components/Utils/Button";
import { MdOutlineSearch } from "react-icons/md";
import InputText from "components/Utils/InputText";

export default function News() {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <h2>Fique por dentro das novidades</h2>
        <p>Atualizações de e-books, novos livros, promoções e outros.</p>
        <InputText color="blue" placeholder='Envia um email' />
      </div>
    </section>
  );
}
