import React from 'react'

function Button(props) {
    return (
        <>
        <button onClick={props.picSwitch}> {props.symbol} </button>
        
        
        </>
    )
}

export default Button