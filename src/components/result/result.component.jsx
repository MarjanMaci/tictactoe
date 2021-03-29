import React from 'react'
import './result.styles.scss'
import Custombutton from './customButton.component'

const Result = ({winner,reset}) => (
    <div className="result">
        {winner === "Circle" && "Circle won the game"}
        {winner === "Cross" && "Cross won the game"}
        {winner === "It's a tie" && "It is a tie"}
        <div className='button' onClick={reset}>
            <Custombutton textot="Reset"></Custombutton>
        </div>
    </div>
)

export default Result;