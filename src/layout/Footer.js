import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home/Home.css'
import Logo from '../assets/images/logo3.png'
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className=' pt-5 pb-2 bg-darkblue'>
            <div className='container d-flex justify-content-center'>
                <div className='text-center text-white'>
                    <div ><img style={{ width: '175px' }} src={Logo} alt="" /></div>
                    <Link className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>Projects</Link>
                    <Link className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>hoisting</Link>
                    <Link className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>specifications</Link>
                    <Link className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>privacy policy</Link>
                    <Link className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>terms and conditions</Link>
                    <Link className='hover-color font-khula text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>store</Link>

                    <div className='d-flex gap-3 justify-content-center '>
                        <a className='' href="#" target="_blank" rel="noopener noreferrer"><AiFillInstagram size='40' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle size='40' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp size='40' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsFacebook size='40' color='#fff' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><BsLinkedin size='40' color='#fff' /></a>

                    </div>

                    <p className='font-khula mt-3' style={{ fontSize: '12px' }}>© 2022 DEBT. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;