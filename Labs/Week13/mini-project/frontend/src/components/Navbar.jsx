// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";

// CREATE COMPONENT
const Navbar = ({ user, getMovies }) => {
    console.log(user);
    return (
        <nav>
            <Link to="/home">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/shop">Shop</Link>
            <span style={{ paddingLeft: "10px" }}>Welcome {user.newUser.name}</span>
        </nav>
    );
};

// EXPORT COMPONENT
export default Navbar;
