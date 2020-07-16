import React from 'react'
import Image from '../Image'
import avatar from '../../images/avatar.jpg'
import styles from './avatar.module.css'

const Avatar = () => (
    <div className={styles.avatar}>
        <Image
            src={avatar}
            alt="african-american man with glasses and a scarf"
        />
    </div>
)

export default Avatar
