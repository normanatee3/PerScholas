import React from 'react'

function Favorites(props) {
    return (
        <div>
            <button onClick={props.pushGif}>ADD</button>
            <h1>FAVORITES</h1>
            <p>
                {props.list.map((item, i) =>{
                    return<div>
                        
                        {item.data.title}<br></br>
                        <img className='smallPic' src={item.data.images.fixed_width_small_still.url} alt="broken" /><br/>
                        <button onClick={props.deleteGif} title={item.data.title}>DELETE</button>
                    </div> 
                })}
                
            </p>
        </div>
    )

}

export default Favorites