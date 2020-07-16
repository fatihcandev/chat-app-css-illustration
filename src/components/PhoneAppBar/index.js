import React from 'react'
import ArrowLeft from '../../icons/ArrowLeft'
import Avatar from '../Avatar'
import DotsVertical from '../../icons/DotsVertical'
import PhoneAppBarTopShape from '../PhoneAppBarTopShape'
import PhoneAppBarUserInfo from '../PhoneAppBarUserInfo'
import styles from './phoneAppBar.module.css'

const PhoneAppBar = () => (
    <div className={styles.wrapper}>
        <PhoneAppBarTopShape />
        <div className={styles.secondWrapper}>
            <ArrowLeft />
            <Avatar />
            <PhoneAppBarUserInfo />
            <DotsVertical className={styles.dots} />
        </div>
    </div>
)

export default PhoneAppBar
