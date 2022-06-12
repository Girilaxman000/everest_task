import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

const TopCorner = (props) => {
    const router = useRouter()
    const [show, setShow] = useState(false)
    const cross = () => {
        props.cross()
    }
    return (
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          
          <FontAwesomeIcon icon={faTimesCircle} color="blue" height={"20px"} onClick={cross}/>
            <button onClick={() =>  router.push('/cart')}>Check</button>
            <h1>Welcome</h1>
        </div>
    )
}

export default TopCorner