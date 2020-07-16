import React from 'react'
import ArrowRight from '../../icons/ArrowRight'
import styles from './input.module.css'

const Input = () => (
    <div className={styles.wrapper}>
        <input
            className={styles.input}
            type="text"
            placeholder="Type a message..."
        />
        <div className={styles.send}>
            <ArrowRight />
        </div>
    </div>
)

export default Input
