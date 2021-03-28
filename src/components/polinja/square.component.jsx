import React from 'react';
import '../polinja/square.css';
import Circle from "../x-0/0/0.component"
import Cross from "../x-0/x/x.component"

function Square({position,value,takeTurn}){
    function handleClick(){
        if(value=="empty"){
            takeTurn(position)
        }
    } 
    return(
    <div className='square' onClick={handleClick}>
            {value === 'circle' && <Circle/>}
            {value === 'cross' && <Cross/>}
    </div>)
}

export default Square;