import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo.png'
import '../pages/Home/Home.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const NavMenu = () => {
    return (
        <div >
            <Navbar style={{ backgroundColor: '#000000', color: "white", }} collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#/home"><img style={{ width: '175px' }} src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav"  >
                        <MenuIcon style={{ fontSize: '40px' }} id="responsive-navbar-nav" />
                    </Navbar.Toggle>
                    <Navbar.Collapse className='text-white' id="responsive-navbar-nav">

                        <Nav className="me-auto text-white">
                        </Nav>
                        <Nav className='text-center' >
                            <Nav.Link as={Link} to='howItWorks' className='text-white fs-5 me-md-5 font-micra' href="#howItWorks">HOW IT WORKS</Nav.Link>
                            <Nav.Link className='text-white fs-5 me-md-5 font-micra' href="#projects">PROJECTS</Nav.Link>
                            <Nav.Link as={Link} to="hosting" className='text-white fs-5 me-md-5' href="#hosting">HOSTING</Nav.Link>
                            <Nav.Link className='text-white fs-5 me-md-5 mt-2' href="#login"
                                style={{ border: '2px solid white', borderRadius: '10px', padding: '2px 30px', maxHeight: "40px", width: '140px', margin: '0px auto' }}>LOGIN</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;