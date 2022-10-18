// Don't forget the import
import { Link } from 'react-router-dom';
import React from 'react'
import * as userService from '../utilities/users-service'

export default function NavBar({user, setUser}) {
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }
        return (
            <nav>
                <h1>NAVBAR</h1>
                {user ? <h2>Welcome, {user.name}</h2> : <></>}
                <Link to="/orders">Order History</Link>
                &nbsp; | &nbsp;
                <Link to="/orders/new">New Order</Link>
                &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
            </nav>
        )
    }

