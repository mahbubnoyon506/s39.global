import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo3.png'
import '../pages/Home/Home.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import TopButton from '../components/TopLoginButton/TopButton';
import WalletLogin from '../components/WalletLogin';
import './layout.css'
import coin from '../assets/images/coin2.png'
import { S39GlobalContext } from '../contexts/S39GlobalContext';
import swal from 'sweetalert';
import LoginButton from '../components/LoginButton/LoginButton';


const NavMenu = () => {
    const { logOut, connectToMetamask, walletModal, closeWalletModal, goToProfile, setGoToProfile } = useContext(S39GlobalContext);
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const go = () => {
            if (goToProfile) {

                navigate("/profile");
                setTimeout(() => {
                    setGoToProfile(false);
                }, 1000);
            }
        }
        go();
    }, [goToProfile]);


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
    const activeClass = ({ isActive }) => {
        return {
            color: isActive ? "#EDE197" : "#fff",
            textDecoration: 'none',
            fontWeight: '500'
        };
    };

    return (
        <div className="position-sticky top-0" style={{ zIndex: 1023, borderBottom: '1px solid #FEF6A3' }}>
            <Navbar className='bg-darkblue py-3' collapseOnSelect expand="lg" expanded={expanded} onToggle={setExpanded}>
                <Container>
                    <Navbar.Brand  onClick={()=>{setExpanded(false)}}  as={Link} to="/" href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav"  >
                        <MenuIcon style={{ fontSize: '40px' }} id="responsive-navbar-nav" />
                    </Navbar.Toggle>
                    <Navbar.Collapse className='text-white' id="responsive-navbar-nav">
                        <Nav className="me-auto text-white">
                        </Nav>
                        <Nav className='text-white text-center d-flex justify-content-center align-items-center ' >
                            <NavLink onClick={()=>{setExpanded(false)}} as={Link} to='/howItWorks' className='me-lg-5 font-mira py-2 py-lg-0' style={activeClass} href="#howItWorks">HOW IT WORKS</NavLink>
                            <NavLink onClick={()=>{setExpanded(false)}} className='me-lg-5 font-mira py-2 py-lg-0' as={Link} to="/projects" style={activeClass} href="#projects">PROJECTS</NavLink>
                            <div onClick={()=>{setExpanded(false)}} className=' py-3 py-lg-0'>
                            <LoginButton></LoginButton>
                            </div>

                            {/* {user?.walletAddress ?
                                <Nav.Link as={Link} to='profile' href="#login"><TopButton><img style={{ marginLeft: '-15px', marginRight: '-10px' }} src={coin} width={50} alt="" />Profile</TopButton></Nav.Link>
                                :
                                <Nav.Link onClick={() => openWalletModal()} href="#login"><TopButton><img style={{ marginLeft: '-15px', marginRight: '-10px' }} src={coin} width={50} alt="" /> LOGIN with Wallet</TopButton></Nav.Link>} */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavMenu;