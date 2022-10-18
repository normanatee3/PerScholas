import { Link } from "react-router-dom";
import React from 'react'

function nav() {
    return (
        <div className="nav">
            <Link to="/">
                <div>CRYPTO PRICES</div>
            </Link>
            <Link to="/currencies">
                <div>CURRENCIES</div>
            </Link>
        </div>
    )
}

export default nav