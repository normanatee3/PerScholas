import React from 'react'
import { Link } from "react-router-dom"

const Navbar = ({ user }) => {
    return (
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new/:id">New Order</Link>
            <span style={{ paddingLeft: "10px" }}>Welcome {user.newUser.name}</span>
        </nav>
    )
}

export default Navbar