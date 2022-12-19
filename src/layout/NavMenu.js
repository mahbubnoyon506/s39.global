import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo2.png'
import '../pages/Home/Home.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const NavMenu = () => {
    return (
        <div >
            <Navbar className='bg-darkblue' collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#/home"><img style={{ width: '175px' }} src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav"  >
                        <MenuIcon style={{ fontSize: '40px' }} id="responsive-navbar-nav" />
                    </Navbar.Toggle>
                    <Navbar.Collapse className='text-white' id="responsive-navbar-nav">

                        <Nav className="me-auto text-white">
                        </Nav>
                        <Nav className='primary text-center' >
                            <Nav.Link as={Link} to='howItWorks' className='fs-5 me-md-5 font-micra' style={{color: '#FFC000'}} href="#howItWorks">HOW IT WORKS</Nav.Link>
                            <Nav.Link className='fs-5 me-md-5 font-micra' style={{color: '#FFC000'}} href="#projects">PROJECTS</Nav.Link>
                            <Nav.Link as={Link} to="hosting" className='fs-5 me-md-5' style={{color: '#FFC000'}} href="#hosting">HOSTING</Nav.Link>
                            <Nav.Link className='fs-5 me-md-5 mt-2' href="#login"
                                style={{background: '#FFC000', color: '#000', padding: '2px 30px', maxHeight: "40px", width: '140px', margin: '0px auto' }}>LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;