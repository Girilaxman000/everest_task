import Navbar , {useState} from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

import Cart from '../cart'
import * as AuthenticationSlice from "../../redux/cart.slice"

import styles from './style.module.css'

const Navigationbar = ({children}) => {
  const items = useSelector(AuthenticationSlice.getItem)

  return (
    <>
      <Navbar className="w-100" style={{flexWrap: 'nowrap', justifyContent: 'flex-start', backgroundColor: '#4CACBC'}}>
        <Container>
          <Navbar.Brand href="/" style={{ marginLeft: '20px'}}>Everest</Navbar.Brand>
        </Container>
        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} color="black" height={"20px"}  />
        <p className={styles.cart_length}>{`(${items.length})`}</p>
      </Navbar>

      {children}
    </>

  )
}

export default Navigationbar