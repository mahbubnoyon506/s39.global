import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home/Home.css'
import Logo from '../assets/images/logo3.png'
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    const year =  new Date().getFullYear();
    return (
        <div className=' pt-5 pb-2 bg-darkblue'>
            <div className='container d-flex justify-content-center'>
                <div className='text-center text-white'>
                    <div ><img style={{ width: '175px' }} src={Logo} alt="" /></div>
                    <Link to='/projects' className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }}>Projects</Link>
                    {/* <Link to='/' className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }}>hosting</Link> */}
                    <Link to='/specification' className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }}>specifications</Link>
                    <Link to='/privacypolicy' className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }}>privacy policy</Link>
                    <Link to='/termscondition' className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }}>terms and conditions</Link>
                    <Link to='/store' className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }}>store</Link>

                    <div className='d-flex gap-3 justify-content-center '>
                        <a className='' href="#" target="_blank" rel="noopener noreferrer"><AiFillInstagram size='40' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle size='40' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp size='40' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsFacebook size='40' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsLinkedin size='40' color='#fff' /></a>

                    </div>

                    <p className='font-khula mt-3' style={{ fontSize: '12px' }}>© {year} S39 Global. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;