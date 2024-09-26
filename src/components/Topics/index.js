import React from 'react'
import styles from './Topics.module.scss'

export default function Topics() {
  return (
    <section className={styles.topics}>
      <div className={styles.container}>
        <h2>Tópicos visitados recentemente</h2>
        <ul className={styles.list}>
          <li>Android</li>
          <li>OO</li>
          <li>Marketing Digital</li>
          <li>Agile</li>
          <li>Startups</li>
          <li>HTML & CSS</li>
          <li>Python</li>
          <li>React</li>
          <li>Angular</li>
        </ul>
      </div>
    </section>
  )
}
