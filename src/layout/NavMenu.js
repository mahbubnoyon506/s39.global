import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo3.png'
import '../pages/Home/Home.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import TopButton from '../components/TopLoginButton/TopButton';
import WalletLogin from '../components/WalletLogin';


const NavMenu = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div >
            <Navbar className='bg-darkblue' collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#/home"><img style={{ width: '220px' }} src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav"  >
                        <MenuIcon style={{ fontSize: '40px' }} id="responsive-navbar-nav" />
                    </Navbar.Toggle>
                    <Navbar.Collapse className='text-white' id="responsive-navbar-nav">

                        <Nav className="me-auto text-white">
                        </Nav>
                        <Nav className='text-white text-center' >
                            <Nav.Link as={Link} to='howItWorks' className=' text-white fs-5 me-md-5 font-mira' href="#howItWorks">HOW IT WORKS</Nav.Link>
                            <Nav.Link className='text-white fs-5 me-md-5 font-mira' href="#projects">PROJECTS</Nav.Link>
                            <Nav.Link as={Link} to="hosting" className='text-white fs-5 me-md-5 font-mira' href="#hosting">HOSTING</Nav.Link>
                            <Nav.Link onClick={setOpen} href="#login"><TopButton>LOGIN</TopButton></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                open && <WalletLogin setOpen={setOpen} open={open}></WalletLogin>
            }
        </div>
    );
};

export default NavMenu;