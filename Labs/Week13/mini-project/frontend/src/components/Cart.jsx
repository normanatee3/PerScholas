import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Cart({ array, show, setShow }) {


    const handleClose = () => setShow(false);

    return (
        <>


            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>MERNMOVIES Checkout</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {array.map((movie, i) => {
                        return <div>
                            <h3>{movie.name}</h3>
                            <img style={{width: "150px"}} src={movie.img} alt="" />
                            <h3>${movie.price}</h3>
                        </div>
                    })}
                    
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart