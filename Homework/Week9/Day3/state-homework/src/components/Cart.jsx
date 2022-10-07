import React from 'react'

function Cart(props) {
    const rotateFunc = [props.reset1,props.reset2,props.reset3]
    const rotateCount = [props.count1,props.count2,props.count3]

    return (
        <>
        {rotateCount[0] === 0 
        && rotateCount[1] === 0 
        && rotateCount[2] === 0
        ? <></>
        :<div className='cart'>

        <h1>CART</h1>
        
        {props.products.map((item, i)=>{
            return <div>
                {rotateCount[i] > 0 ?
                <div>

                <img src={item.image} alt="" />
                <h3>{item.name} x{rotateCount[i]}</h3>
                
                <button onClick={rotateFunc[i]}>REMOVE</button>
                </div>
                    :<></>}
            </div>
        })}
        </div>
        }
        
        </>
    )
}

export default Cart