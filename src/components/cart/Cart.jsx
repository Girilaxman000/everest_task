import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

import * as AuthenticationSlice from "../../redux/cart.slice"
import CartComponent from '../cart-component/CartComponent';

import styles from './style.module.css'

const Cart = (props) => {
    const router = useRouter()
    const items = useSelector(AuthenticationSlice.getItem)

    const cross = () => {
        props.cross()
    }

    const sum = items.map(item => {
        const formattedString = item.price.replace('$', "")
        const result = Number(formattedString)
        return result
    }).reduce(((total, value) => total + value), 0)

    return (
        <>
            <div className={styles.cart}>
            <FontAwesomeIcon icon={faTimesCircle} className={styles.icon} color="white" height={"20px"} onClick={cross} />
                {
                    items.map(data => <CartComponent key={data.id} item={data} />)
                }
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                <p style={{textAlign: 'center'}}>T. Amount: {items.length}</p>
                <p style={{ textAlign: 'center'}}>T. Price: {sum}</p>
                </div>
                <button className={styles.btn_checkout} onClick={() => router.push('/checkout')}>Add to Cart</button>
            </div>

        </>
    )
}

export default Cart