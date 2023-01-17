import { Button } from '@mui/material';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { RiDownload2Fill } from 'react-icons/ri';
import projects39 from '../../assets/images/s39.png'
import coin from '../../assets/images/Picture9.png'
import '../Home/Home.css'
import Modal from './Modal';

const S39 = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    return (
        <div className='container py-3'>
            <div className='row g-5 align-items-center'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={projects39} alt="" />
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
                    <div className='d-flex justifu-content-start align-items-end mb-4'>
                        <div className='me-2' style={{width: '80px'}}>
                            <img className='img-fluid' src={coin} alt="" />
                        </div>
                        <h2 className='projectTitle mb-0'>S39 Token</h2>
                    </div>
                    <p className='projectText'>S39 token is a community-driven token established in the year 2021 to create multi-decentralized utility projects to enhance the community to become a business community and to strive towards financial freedom. <br /> <br />
                        S39 token is the main token used in S39 global ecosystem for the transactions in the identified business projects, such as Mineral, Agriculture, Gold, Real Estate etc.</p>
                </div>
            </div>
        </div>
    );
};

export default S39;