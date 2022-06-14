import Image from 'next/image'
import React from 'react'

import styles from './style.module.css'

const CartComponent = ({ item }) => {
    return (
        <div className={styles.cart}>
            <div className={styles.cart_item}>
                <Image className={styles.cart_image} src={`https://electronic-ecommerce.herokuapp.com/${item.image}`} height={100} width={100} alt="Card image cap" />
                <p className={styles.cart_text_one}>{item.name}</p>
                <p className={styles.cart_text_two}>{item.price}</p>
            </div>
        </div>
    )
}

export default CartComponent