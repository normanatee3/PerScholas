import React from 'react'

function Shop(props) {
    const rotateFunc = [props.add1,props.add2,props.add3]
    return (
        <>
        <div className='shop'>

        <h1>SHOP</h1>
        
        {props.products.map((item, i)=>{
            return <div className='side'>
                <img src={item.image} alt="" />
                <h1>{item.name.toUpperCase()}</h1>
                <button onClick={rotateFunc[i]}>ADD</button>
            </div>
        })}
        
        </div>
        </>
    )
}

export default Shop