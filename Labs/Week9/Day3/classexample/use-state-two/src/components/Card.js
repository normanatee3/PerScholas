import React from 'react'


function Card(props) {
    
    return (
        <>
        <h1>{props.profile.name}</h1>
        <a href={props.profile.link}>

        <img className="image" src={props.profile.image} alt="broken" />
        </a>
        
        
        </>
    )
}

export default Card