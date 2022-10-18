import React from 'react'

function WishList(props) {
    
    
    
    

    return (
        <div className='wish'>
            <button onClick={props.pushMovie}>ADD</button>
            <p>
                {props.list.map((item, i) =>{
                    return<div>
                        
                        {item.Title}
                        <img className='smallPic' src={item.Poster} alt="broken" /><br/>
                        <button onClick={props.deleteMovie} title={item.Title}>DELETE</button>
                    </div> 
                })}
                
            </p>
        </div>
    )
}

export default WishList