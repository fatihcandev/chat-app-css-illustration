import React from 'react'
import Image from '../Image'
import dogImage1 from '../../images/dog-image-1.jpg'
import dogImage2 from '../../images/dog-image-2.jpg'
import dogImage3 from '../../images/dog-image-3.jpg'
import styles from './dogPictures.module.css'

const DogPictures = () => (
    <div className={styles.wrapper}>
        <Image src={dogImage1} alt="dog" />
        <Image src={dogImage2} alt="dog" />
        <Image src={dogImage3} alt="dog" />
    </div>
)

export default DogPictures
