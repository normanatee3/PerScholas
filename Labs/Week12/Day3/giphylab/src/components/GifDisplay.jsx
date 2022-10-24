import React from 'react'

function GifDisplay({ gif }) {
    const loaded = () => {
        return (
            <div>
                <h1>{gif.data.title}</h1>
                <img src={gif.data.images.fixed_height.url} alt="" />

            </div>
        )
    }
    const loading = () =>{
        return(
            <div>
            
            </div>
        )
    }
    return gif ? loaded() : loading()

}

export default GifDisplay