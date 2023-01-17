import { Button } from '@mui/material';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { RiDownload2Fill } from 'react-icons/ri';
import projectmineral from '../../assets/images/mineral.png'
import mineral from '../../assets/images/Picture1.png'
import '../Home/Home.css'
import Modal from './Modal';

const Mineral = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    return (
        <div className='container py-3' >
            <div className='row g-5 align-items-center'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={projectmineral} alt="" />
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
                        <div className='me-2' style={{ width: '80px' }}>
                            <img className='img-fluid' src={mineral} alt="" />
                        </div>
                        <h2 className='projectTitle mb-0'>Mineral</h2>
                    </div>
                    <p className='projectText'>Mineral is the first S39 Global project supported by and linked to the physical production and sale of mineral. By purchasing a Minting Power Bot and becoming a minting operator, you're allowing Digital Licensing Incorporated, the S39Global  ecosystem's permissioned administrator to support the mineral projects within the exploration, mining and physical production of mineral with certain key benefits. Minting operators  are rewarded for their blockchain support with Mineral tokens.</p>
                </div>
            </div>
        </div>
    );
};

export default Mineral;