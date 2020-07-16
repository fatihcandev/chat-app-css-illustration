import React from 'react'
import styles from './textSection.module.css'

const TextSection = () => (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Simple booking</h2>
        <p className={styles.paragraph}>
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
        </p>
    </div>
)

export default TextSection
