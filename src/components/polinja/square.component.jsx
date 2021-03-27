import React from 'react';
import '../polinja/square.css';
import Circle from "../x-0/0/0.component"
import Cross from "../x-0/x/x.component"

const Square = ({position,value}) => (
    <div className='square'>
        {
            value === 'circle' && <Circle/> ||
            value === 'cross' && <Cross/>
        }
    </div>
)

export default Square;