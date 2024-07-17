import React from 'react'
import styles from './Banner.module.scss'
import { MdOutlineSearch } from "react-icons/md";
export default function Banner() {
  return (
    <section className={styles.banner}>
      <h2>Já sabe por onde começar?</h2>
      <p>Encontre em nossa estante o que precisa para seu desenvolvimento!</p>
      <div className={styles['box-input']}>
        <MdOutlineSearch color='white' size={24}/>
        <input type="text" placeholder='Qual será sua próxima leitura?' name="" id="" />
      </div>
    </section>
  )
}
