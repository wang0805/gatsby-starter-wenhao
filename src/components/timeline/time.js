import React from 'react'

import styles from './style'

export const Timeline = ({ children }) => (
  <div className={styles.container}>
    <ul className={styles.timeline}>{children}</ul>
  </div>
)

export const Event = ({ title, subtitle, interval, children }) => (
  <li className={styles.event}>
    <label className={styles.icon} />
    <div className={styles.body}>
      <p className={styles.date}>{interval}</p>
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <div className={styles.description}>{children}</div>
    </div>
  </li>
)
