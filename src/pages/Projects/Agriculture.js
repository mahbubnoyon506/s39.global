import { Button } from '@mui/material';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { RiDownload2Fill } from 'react-icons/ri';
import projectagriculture from '../../assets/images/agriculture.png'
import agriculture from '../../assets/images/project3.png'
import '../Home/Home.css'
import Modal from './Modal';

const Agriculture = () => {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    return (
        <div className='container py-3' >
            <div className='row g-5 align-items-center'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={projectagriculture} alt="" />
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
                            <img className='img-fluid' src={agriculture} alt="" />
                        </div>
                        <h2 className='projectTitle mb-0'>Agriculture <br />(GROW TOKEN)</h2>
                    </div>
                    <p className='projectText'>GROW token, the second S39 Global project to launch, is supported by high yielding agriculture. GROW will contribute to the agriculture industry and will bring a unique revenue back into the ecosystem by reducing grow cost, waste and reliance on brokers. To better understand bottlenecks, creating value earlier in the process, increasing efficiency with less administrative burden and the ability to attract new liquidity.</p>
                </div>
            </div>
        </div>
    );
};

export default Agriculture;