import React from 'react';
import { BiCoin } from 'react-icons/bi';
import image from '../../../../../src/assets/images/icon/aave.png'
import image2 from '../../../../../src/assets/images/icon/icons8-bitcoin-48.png'
import image3 from '../../../../../src/assets/images/icon/usdt.png'
import teether from '../../../../../src/assets/images/icon/teether.png'
import { Button } from '@mui/material';


const Wallets = () => {

    return (
        <div>
            <h5 className="dashboard-title">Wallet</h5>
            <div className='d-flex justify-content-between'>
                <div className='text-white'>
                    {/* <h2>DEBT WALLET</h2> */}
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='position-relative'>
                    <div className='rounded-circle d-flex align-items-center justify-content-center text-white' style={{width:'35px', height: '35px', background: '#7039ca' }}> $4 </div>
                </div>
            </div>

            <div class="row  g-3">
                <div class="col-12 col-md-6">
                    <div class="text-white p-3" style={{ background: '#0c1024' }}>
                        <div className=' d-flex justify-content-between '>
                            <div className='d-flex'>
                                <div>
                                    <img src={image} alt="" style={{ width: "50px" }} />
                                </div>
                                <div className='ms-2 ' style={{ fontSize: '12px' }}>
                                    <p className='mb-0 text-success'>aave</p>
                                    <p className='mb-0'>324.1</p>
                                    <p className='mb-0 text-danger'>+ 1002.32</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='rounded-circle d-flex align-items-center justify-content-center me-2' style={{width:'35px', height: '35px', border: '1px solid' }}> 4 </div>
                                <div className='rounded-circle d-flex align-items-center justify-content-center' style={{width:'35px', height: '35px', border: '1px solid' }}> 2 </div>
                            </div>
                        </div>

                        <div className='mt-3 '>
                            <Button sx={{ background: '#3E73AD', marginRight: '10px', '&:hover': { background: '#3E73AD' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                            <Button sx={{ background: '#fff', color: '#000', '&:hover': { background: '#fff' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="text-white p-3" style={{ background: '#0c1024' }}>
                        <div className=' d-flex justify-content-between '>
                            <div className='d-flex'>
                                <div>
                                    <img src={image2} alt="" style={{ width: "50px" }} />
                                </div>
                                <div className='ms-2 ' style={{ fontSize: '12px' }}>
                                    <p className='mb-0 text-success'>bitcoin</p>
                                    <p className='mb-0'>324.1</p>
                                    <p className='mb-0 text-danger'>+ 1002.32</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='rounded-circle d-flex align-items-center justify-content-center me-2' style={{width:'35px', height: '35px', border: '1px solid' }}> 2 </div>
                                <div className='rounded-circle d-flex align-items-center justify-content-center' style={{width:'35px', height: '35px', border: '1px solid' }}> 4 </div>
                            </div>
                        </div>

                        <div className='mt-3 '>
                            <Button sx={{ background: '#3E73AD', marginRight: '10px', '&:hover': { background: '#3E73AD' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                            <Button sx={{ background: '#fff', color: '#000', '&:hover': { background: '#fff' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="text-white p-3" style={{ background: '#0c1024' }}>
                        <div className=' d-flex justify-content-between '>
                            <div className='d-flex'>
                                <div>
                                    <img src={image3} alt="" style={{ width: "50px" }} />
                                </div>
                                <div className='ms-2 ' style={{ fontSize: '12px' }}>
                                    <p className='mb-0 text-success'>teether</p>
                                    <p className='mb-0'>324.1</p>
                                    <p className='mb-0 text-danger'>+ 1002.32</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='rounded-circle d-flex align-items-center justify-content-center me-2' style={{width:'35px', height: '35px', border: '1px solid' }}> 6 </div>
                                <div className='rounded-circle d-flex align-items-center justify-content-center' style={{width:'35px', height: '35px', border: '1px solid' }}> 3 </div>
                            </div>
                        </div>

                        <div className='mt-3 '>
                            <Button sx={{ background: '#3E73AD', marginRight: '10px', '&:hover': { background: '#3E73AD' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                            <Button sx={{ background: '#fff', color: '#000', '&:hover': { background: '#fff' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="text-white p-3" style={{ background: '#0c1024' }}>
                        <div className=' d-flex justify-content-between '>
                            <div className='d-flex'>
                                <div>
                                    <img src={image2} alt="" style={{ width: "50px" }} />
                                </div>
                                <div className='ms-2 ' style={{ fontSize: '12px' }}>
                                    <p className='mb-0 text-success'>bitcoin</p>
                                    <p className='mb-0'>324.1</p>
                                    <p className='mb-0 text-danger'>+ 1002.32</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='rounded-circle d-flex align-items-center justify-content-center me-2' style={{width:'35px', height: '35px', border: '1px solid' }}> 3 </div>
                                <div className='rounded-circle d-flex align-items-center justify-content-center' style={{width:'35px', height: '35px', border: '1px solid' }}> 6 </div>
                            </div>
                        </div>

                        <div className='mt-3 '>
                            <Button sx={{ background: '#3E73AD', marginRight: '10px', '&:hover': { background: '#3E73AD' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                            <Button sx={{ background: '#fff', color: '#000', '&:hover': { background: '#fff' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="text-white p-3" style={{ background: '#0c1024' }}>
                        <div className=' d-flex justify-content-between '>
                            <div className='d-flex'>
                                <div>
                                    <img src={teether} alt="" style={{ width: "50px" }} />
                                </div>
                                <div className='ms-2 ' style={{ fontSize: '12px' }}>
                                    <p className='mb-0 text-success'>Teether</p>
                                    <p className='mb-0'>324.1</p>
                                    <p className='mb-0 text-danger'>+ 1002.32</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='rounded-circle d-flex align-items-center justify-content-center me-2' style={{width:'35px', height: '35px', border: '1px solid' }}> 4 </div>
                                <div className='rounded-circle d-flex align-items-center justify-content-center' style={{width:'35px', height: '35px', border: '1px solid' }}> 2 </div>
                            </div>
                        </div>

                        <div className='mt-3 '>
                            <Button sx={{ background: '#3E73AD', marginRight: '10px', '&:hover': { background: '#3E73AD' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                            <Button sx={{ background: '#fff', color: '#000', '&:hover': { background: '#fff' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="text-white p-3" style={{ background: '#0c1024' }}>
                        <div className=' d-flex justify-content-between '>
                            <div className='d-flex'>
                                <div>
                                    <img src={teether} alt="" style={{ width: "50px" }} />
                                </div>
                                <div className='ms-2 ' style={{ fontSize: '12px' }}>
                                    <p className='mb-0 text-success'>Teether</p>
                                    <p className='mb-0'>324.1</p>
                                    <p className='mb-0 text-danger'>+ 1002.32</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='rounded-circle d-flex align-items-center justify-content-center me-2' style={{width:'35px', height: '35px', border: '1px solid' }}> 2 </div>
                                <div className='rounded-circle d-flex align-items-center justify-content-center' style={{width:'35px', height: '35px', border: '1px solid' }}> 4 </div>
                            </div>
                        </div>

                        <div className='mt-3 '>
                            <Button sx={{ background: '#3E73AD', marginRight: '10px', '&:hover': { background: '#3E73AD' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                            <Button sx={{ background: '#fff', color: '#000', '&:hover': { background: '#fff' }, marginBottom: '5px' }} variant='contained'>Button</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallets;