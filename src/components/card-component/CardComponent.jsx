import Image from 'next/image';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import * as AuthenticationSlice from "../../redux/cart.slice"
import Cart from '../cart'

import styles from './style.module.css'


const CardComponent = ({ item }) => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const close = () => {
        setShowModal(false)
    }

    const addToCart = (item) => {
        setShowModal(true)
        dispatch(AuthenticationSlice.setItem(item))
    }
    
    return (
        <>
            {showModal && <Cart cross={close} />}
            <div className="col-sm-4" style={{ marginTop: '10px' }}>
                <div className="card">
                    <Image className="card-img-top" src={`https://electronic-ecommerce.herokuapp.com/${item.image}`} height={200} width={200} alt="Card image cap" />
                    <div className="card-body">
                        <div className={styles.card_item}>
                            <p className="card-text">{item.name}</p>
                            <p className="card-text">{item.price}</p>
                        </div>
                        <div className={styles.card_item}>
                            <p className="card-text">{item.category[0]}</p>
                            <p className="card-text">{item.category[1]}</p>
                            <p className="card-text">{item.stock}</p>
                        </div>
                        <button className='col-lg-12  btn btn-primary' style={{ backgroundColor: '#4CACBC' }} onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardComponent
