import { Button } from '@mui/material';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { RiDownload2Fill } from 'react-icons/ri';
import projecteCommerce from '../../assets/images/e-commerce.png'
import eCommerce from '../../assets/images/Picture2.png'
import '../Home/Home.css'
import Modal from './Modal';

const Ecommerce = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    return (
        <div className='container py-3' >
            <div className='row g-5 align-items-center'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={projecteCommerce} alt="" />
                    <div className='d-flex justify-content-center'>
                        <div>
                            <Button onClick={handleClickOpen} sx={{ borderRadius: '10px', background: '#FFC000', color: '#000',fontWeight: '700', marginRight: '10px', '&:hover': { background: '#FFC000' } }} variant='contained'>Lite Paper <RiDownload2Fill size={20} /></Button>
                            <Button onClick={handleClickOpen} className='learn-more' sx={{ borderRadius: '10px', background: '#FFC000', color: '#000',fontWeight: '700', '&:hover': { background: '#FFC000' } }} variant='contained'>Learn More <FaAngleRight size={20} /></Button>
                        </div>
                    </div>
                    {
                        open && <Modal open={open} setOpen={setOpen}></Modal>
                    }
                </div>
                <div className='col-md-6'>
                    <div className='d-flex justifu-content-start align-items-center mb-4'>
                        <div className='me-2' style={{ width: '80px' }}>
                            <img className='img-fluid' src={eCommerce} alt="" />
                        </div>
                        <h2 className='projectTitle mb-0'>E-commerce</h2>
                    </div>
                    <p className='projectText'>E-commerce is the buying and selling of goods and services over the internet. S39 Global E-commerce is a substitute for brick-and-mortar store. Almost anything can be purchased through S39 Global E-commerce. Members of S39Global gets first priority to showcase their products to the world. It also offers its member special discounted price on purchase of items in the S39 Global E-commerce.</p>
                </div>
            </div>
        </div>
    );
};

export default Ecommerce;