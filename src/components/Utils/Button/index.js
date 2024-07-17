import React from 'react'
import styles from './Button.module.scss'

export default function Button({children, color = ''}) {
  return (
    <button className={`${styles[color]}`}>
      {children}
    </button>
  )}
