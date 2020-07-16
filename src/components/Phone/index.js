import React from 'react'
import styles from './phone.module.css'

const Phone = ({ children }) => (
    <div className={styles.wrapper}>
        <div className={styles.screen}>{children}</div>
    </div>
)

export default Phone
