import React, { useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import * as AuthenticationSlice from "../../redux/auth.slice"
import { useRouter } from 'next/router'

const TopCorner = (props) => {
    const router = useRouter()
    const token = useSelector(AuthenticationSlice.getItem)
    const [show, setShow] = useState(false)
    useEffect(() => {
        console.log(token)
      },[])
    const cross = () => {
        props.cross()
    }
    return (
        <div style={{ position: 'absolute', top: 0, right: 0 , width: '20%', zIndex: 1}}>
            <FontAwesomeIcon icon={faTimesCircle} color="blue" height={"20px"} onClick={cross} />
            <button onClick={() => router.push('/cart')}>Check</button>
            {
                token.map(data => <h1 key={data.id}>{data.name}</h1>)
            }
        </div>
    )
}

export default TopCorner