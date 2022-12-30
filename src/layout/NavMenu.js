import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo3.png'
import '../pages/Home/Home.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import TopButton from '../components/TopLoginButton/TopButton';
import WalletLogin from '../components/WalletLogin';
import './layout.css'
import coin from '../assets/images/coin2.png'
import { S39GlobalContext } from '../contexts/S39GlobalContext';
import swal from 'sweetalert';


const NavMenu = () => {
    const { user, openWalletModal, closeWalletModal, logOut } = useContext(S39GlobalContext);
    console.log(user)
    const navigate = useNavigate;


    const Logout = () => {
        logOut();
        // setOpen(false);
        navigate("/");
        closeWalletModal();
        swal({
            // title: "S",
            text: "You have successfully logged out.",
            icon: "success",
            button: "OK!",
            className: "modal_class_success",
        });
    };

    return (
        <div className="position-sticky top-0" style={{ zIndex: 1023, borderBottom: '1px solid #FEF6A3' }}>
            <Navbar className='bg-darkblue py-3' collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#/home"><img src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav"  >
                        <MenuIcon style={{ fontSize: '40px' }} id="responsive-navbar-nav" />
                    </Navbar.Toggle>
                    <Navbar.Collapse className='text-white' id="responsive-navbar-nav">
                        <Nav className="me-auto text-white">
                        </Nav>
                        <Nav className='text-white text-center d-flex align-items-center' >
                            <Nav.Link as={Link} to='howItWorks' className=' text-white fs-5 me-md-5 font-mira' href="#howItWorks">HOW IT WORKS</Nav.Link>
                            <Nav.Link className='text-white fs-5 me-md-5 font-mira' as={Link} to="projects" href="#projects">PROJECTS</Nav.Link>
                            {/* <Nav.Link as={Link} to="hosting" className='text-white fs-5 me-md-5 font-mira' href="#hosting">HOSTING</Nav.Link> */}
                            {user?.walletAddress ?
                                <Nav.Link onClick={Logout} href="#login"><TopButton><img style={{ marginLeft: '-15px', marginRight: '-10px' }} src={coin} width={50} alt="" />Logout</TopButton></Nav.Link>
                                :
                                <Nav.Link onClick={() => openWalletModal()} href="#login"><TopButton><img style={{ marginLeft: '-15px', marginRight: '-10px' }} src={coin} width={50} alt="" /> LOGIN with Wallet</TopButton></Nav.Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavMenu;