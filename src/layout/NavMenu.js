import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo.png'

const NavMenu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{width: '175px'}} src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link style={{fontSize: '20px', padding: '0px 33px 0 32px'}} href="#deets">PROJECTS</Nav.Link>
                            <Nav.Link style={{fontSize: '20px', padding: '0px 33px 0 32px'}} href="#memes">HOSTING</Nav.Link>
                            <Nav.Link style={{fontSize: '20px', padding: '0px 33px 0 32px'}} href="#deets">LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;