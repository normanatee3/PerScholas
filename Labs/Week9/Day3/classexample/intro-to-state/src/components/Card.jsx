import React from 'react'

function Card(props) {
    return (
        <>
        <h1>Current Pic</h1>

        <img className="image" src={props.images} alt="broken" />
        
        
        </>
    )
}

export default Card