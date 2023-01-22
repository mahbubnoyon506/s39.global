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
                    <div className='d-flex justify-content-center'><img className='pb-1' style={{ width: '200px' }} src={Logo} alt="" /></div>
                    <Link to='/projects' className='py-1 hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '18px' }}>Projects</Link>
                    {/* <Link to='/' className='py-1 hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '18px' }}>hosting</Link> */}
                    <Link to='/specification' className='py-1 hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '18px' }}>specifications</Link>
                    <Link to='/privacypolicy' className='py-1 hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '18px' }}>privacy policy</Link>
                    <Link to='/termscondition' className='py-1 hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '18px' }}>terms and conditions</Link>
                    <Link to='/store' className='py-1 hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '18px' }}>store</Link>

                    <div className='d-flex gap-3 justify-content-center '>
                        <a className='' href="#" target="_blank" rel="noopener noreferrer"><AiFillInstagram size='30' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle size='30' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp size='30' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsFacebook size='27' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsLinkedin size='27' color='#fff' /></a>

                    </div>
                    <p className='font-khula mt-3' style={{ fontSize: '12px' }}>© {year} S39 Global. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;