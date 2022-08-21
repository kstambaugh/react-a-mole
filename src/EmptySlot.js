import { useEffect } from 'react'
import hillImg from './assets/molehill.png'


function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className='myImg'>
            <img style={{ 'width': '20vw' }}
                src={hillImg}
                onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot
