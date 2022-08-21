import React, { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'
import e from 'express'

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = () => {
        if (displayMole) {
            props.score++
            setDisplayMole(false)
        }
    }

    return (
        <div>
            {
                displayMole
                    ? <Mole score={props.score} setScore={props.setScore} setDisplayMole={setDisplayMole} handleClick={handleClick} />
                    : <EmptySlot setDisplayMole={setDisplayMole} handleClick={handleClick} />
            }
        </div>
    )
}


export default MoleContainer