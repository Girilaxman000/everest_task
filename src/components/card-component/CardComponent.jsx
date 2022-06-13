import React , {useState} from 'react'
import styles from './card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import * as AuthenticationSlice from "../../redux/auth.slice"
import { ToastContainer, toast } from 'react-toastify';
import TopCorner from '../../components/modal'

const CardComponent = ({ item }) => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    setTimeout(() => {
        setShowModal(false)
    }, 5000)
    
      const close = () => {
        setShowModal(false)
      }

    const addToCart = (item) => {
        setShowModal(true)
        dispatch(AuthenticationSlice.setItem(item))
    }

    return (
        <>
        {showModal && <TopCorner cross={close} />}
            <div className="col-sm-4" style={{ marginTop: '10px' }}>
                <div className="card">
                    <img className="card-img-top" src={`https://electronic-ecommerce.herokuapp.com/${item.image}`} alt="Card image cap" />
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
                        <button className='col-lg-12  btn btn-primary' onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardComponent




//    <div classNameName={styles.item_column}>
//     <h5>{item.name}</h5>
//     <h5>{item.price}</h5>
//     <button>Add To Cart</button>
//    </div>