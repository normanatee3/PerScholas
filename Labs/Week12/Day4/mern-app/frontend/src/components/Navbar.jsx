import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <h4>NAVIGATION</h4>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new/:id">New Order</Link>
    </nav>
  )
}

export default Navbar