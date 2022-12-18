import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className=' py-5' style={{ background: '#000000' }}>
            <div className='container  justify-content-center'>
                <div className='justify-content-between text-center text-white'>
                    <div className=' d-md-flex justify-content-between'>
                        <div>
                            <div ><img style={{ width: '175px' }} src={Logo} alt="" /></div>
                            <Link className='text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>Projects</Link>
                            <Link className='text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>hoisting</Link>
                            <Link className='text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>specifications</Link>
                            <Link className='text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>privacy policy</Link>
                            <Link className='text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>terms and conditions</Link>
                            <Link className='text-uppercase text-white d-block text-decoration-none' style={{ fontSize: '20px' }} to='#'>store</Link>
                        </div>


                        <div className='mt-3 d-flex gap-2 justify-content-center  '>
                            <a href="_#" target="_blank" rel="noopener noreferrer"><AiFillInstagram size='40' color='#fff' /></a>
                            <a href="_#" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle size='40' color='#fff' /></a>
                            <a href="_#" target="_blank" rel="noopener noreferrer"><BsFacebook size='40' color='#fff' /></a>
                            <a href="_#" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp size='40' color='#fff' /></a>
                            <a href="_#" target="_blank" rel="noopener noreferrer"><BsLinkedin size='40' color='#fff' /></a>
                        </div>

                    </div>

                    <p className='mt-5' style={{ fontSize: '12px' }}>© 2022 DEBT. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;