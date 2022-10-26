// IMPORT REACT
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// ADDITIONAL IMPORTS
import { Link } from "react-router-dom";

// CREATE COMPONENT
const NavBar = ({ user, getMovies }) => {
    console.log(user);
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home" >MERNMOVIES</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home" eventKey="link-1">Home</Nav.Link>
                    <Nav.Link as={Link} to="/shop" eventKey="link-2">Shop</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: {user.newUser.name}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

// EXPORT COMPONENT
export default NavBar;
