import React from 'react'
import styles from './offer.module.css'

const Offer = ({ minutes, hour, price }) => (
    <div className={styles.wrapper}>
        <div className={styles.radio} />
        {minutes ? (
            <p className={styles.mins}>{`${minutes} minutes walk`}</p>
        ) : (
            <p className={styles.mins}>{`${hour} hour walk`}</p>
        )}
        <p className={styles.price}>{`$${price}`}</p>
    </div>
)

export default Offer
