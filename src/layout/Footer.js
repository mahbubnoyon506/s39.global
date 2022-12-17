import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className='bg-dark py-5'>
            <div className='container d-flex justify-content-center'>
                <div className='text-center text-white'>
                    <div ><img style={{width: '175px'}} src={Logo} alt="" /></div>
                    <Link className='text-uppercase text-white d-block text-decoration-none' style={{fontSize: '20px'}} to='#'>Projects</Link>
                    <Link className='text-uppercase text-white d-block text-decoration-none' style={{fontSize: '20px'}} to='#'>hoisting</Link>
                    <Link className='text-uppercase text-white d-block text-decoration-none' style={{fontSize: '20px'}} to='#'>specifications</Link>
                    <Link className='text-uppercase text-white d-block text-decoration-none' style={{fontSize: '20px'}} to='#'>privacy policy</Link>
                    <Link className='text-uppercase text-white d-block text-decoration-none' style={{fontSize: '20px'}} to='#'>terms and conditions</Link>
                    <Link className='text-uppercase text-white d-block text-decoration-none' style={{fontSize: '20px'}} to='#'>store</Link>
                    <div className='d-flex justify-content-center '>
                      <a className='me-2' href="#" target="_blank" rel="noopener noreferrer"><AiFillInstagram size='40' color='#fff'/></a>
                      <a href="#" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle size='40' color='#fff'/></a>
                    </div>
                    <p style={{fontSize: '12px'}}>© 2022 DEBT. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;