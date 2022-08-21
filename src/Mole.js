import React, { useEffect } from 'react';
import moleImg from "./assets/mole.png"

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div className='myImg'>
            <img style={{ 'width': '20vw' }}
                src={moleImg}
                onClick={props.handleClick}></img>
        </div>
    )
}

export default Mole