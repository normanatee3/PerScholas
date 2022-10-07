import React from 'react'

function Receipt(props) {
    return (
        <>
        <hr />
        <div>-------Receipt-------</div>

        <p>
            Name: {props.receipt.person} <br />
            Order: {props.receipt.order.main} <br />
            Protein: {props.receipt.order.protein} <br />
            Rice: {props.receipt.order.rice} <br />
            Sauce: {props.receipt.order.sauce} <br />
            Toppings: 
            <ul>
            {props.receipt.order.toppings.map((topping, i) =>{
                return <li>
                    {topping}
                </li>
            })}
            </ul>
            Drink: {props.receipt.order.drink} <br />
            Cost: {props.receipt.order.cost} <br />
            {props.receipt.paid === true ? 'This customer has paid.' : "This customer has not paid yet"} <br />
        
        </p>



        </>
    )
}

export default Receipt