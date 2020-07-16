import React from 'react'
import styles from './text.module.css'

const Text = ({ type, children }) => (
    <div className={`${styles.wrapper} ${styles[type]}`}>
        <p>{children}</p>
    </div>
)

export default Text
