import { Button } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillCalendar, AiFillThunderbolt } from 'react-icons/ai';


const ClaimToken = () => {
    return (
        <div className='py-5 bg-darkblue'>
            <div className='container' style={{ overflow: 'hidden' }}>
                <div className="">
                    <div className=''>
                        <Card className='primary py-2' style={{ borderRadius: '30px', background: '#262626' }}>
                            <Card.Body>
                                <div className='d-md-flex justify-content-between align-items-center pb-2'>
                                    <div>
                                        <p className='mb-0 text-primary'>#Pool 1</p>
                                        <p className='mb-0'>10% APR</p>
                                    </div>
                                    <div >
                                        <Button sx={{ maxWidth: '220px' }} variant='contained'>Pool duration: 30Days</Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between py-3'>
                                    <p>Min Stake: 100 S POINTS</p>
                                    <p>Max Stake: 2500000 S POINTS</p>
                                </div>
                                <div className='pb-4'>
                                    <div className='d-flex justify-content-between align-items-center '>
                                        <div className='d-flex'>
                                            <div className='d-flex justify-content-center align-items-center me-2 rounded' style={{ width: '40px', height: '40px', background: '#999999' }}>
                                                <AiFillCalendar color='#000' size={30} />
                                            </div>
                                            <div>
                                                <p className='mb-0'>Stake Date</p>
                                                <p className='mb-0'>2/25/2023 12:42:11</p>
                                            </div>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='d-flex justify-content-center align-items-center me-2 rounded' style={{ width: '40px', height: '40px', background: '#FFE5A1' }}>
                                                <AiFillThunderbolt color='#F1A604' size={30} />
                                            </div>
                                            <div>
                                                <p className='mb-0'>Maturity Date</p>
                                                <p className='mb-0'>2/25/2023 12:42:11</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row gx-2'>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Staked</p>
                                        <p className='mb-0 text-center'>200</p>
                                    </div>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Reward</p>
                                        <p className='mb-0 text-center'>200</p>
                                    </div>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Accumulated</p>
                                        <p className='mb-0 text-center'>200</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='d-flex justify-content-between'>
                                        <p className='mb-0'>Total value locked:</p>
                                        <p className='mb-0'>111.2 S POINTS</p>
                                    </div>
                                    <Button sx={{ width: '100%' }} variant='contained'>Claim</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* <div className='col-lg-6'>
                        <Card className='primary py-2' style={{ borderRadius: '30px', background: '#262626' }}>
                            <Card.Body>
                                <div className='d-md-flex justify-content-between align-items-center pb-2'>
                                    <div>
                                        <p className='mb-0 text-primary'>#Pool 2</p>
                                        <p className='mb-0'>10% APR</p>
                                    </div>
                                    <div >
                                        <Button sx={{ maxWidth: '220px' }} variant='contained'>Pool duration: 30Days</Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between py-3'>
                                    <p>Min Stake: 100 S POINTS</p>
                                    <p>Max Stake: 2500000 S POINTS</p>
                                </div>
                                <div className='pb-4'>
                                    <div className='d-flex justify-content-between align-items-center '>
                                        <div className='d-flex w-50'>
                                            <div className='d-flex justify-content-center align-items-center me-2 rounded' style={{ width: '40px', height: '40px', background: '#999999' }}>
                                                <AiFillCalendar color='#000' size={30} />
                                            </div>
                                            <div>
                                                <p className='mb-0'>Stake Date</p>
                                                <p className='mb-0'>2/25/2023 12:42:11</p>
                                            </div>
                                        </div>
                                        <div className='d-flex w-50'>
                                            <div className='d-flex justify-content-center align-items-center me-2 rounded' style={{ width: '40px', height: '40px', background: '#FFE5A1' }}>
                                                <AiFillThunderbolt color='#F1A604' size={30} />
                                            </div>
                                            <div>
                                                <p className='mb-0'>Maturity Date</p>
                                                <p className='mb-0'>2/25/2023 12:42:11</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row gx-2'>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Staked</p>
                                        <p className='mb-0 text-center'>200</p>
                                    </div>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Reward</p>
                                        <p className='mb-0 text-center'>200</p>
                                    </div>
                                    <div className='col-4 py-2' style={{ border: '1px dashed #fff' }}>
                                        <p className='mb-0 text-center'>Accumulated</p>
                                        <p className='mb-0 text-center'>200</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='d-flex justify-content-between'>
                                        <p className='mb-0'>Total value locked:</p>
                                        <p className='mb-0'>111.2 S POINTS</p>
                                    </div>
                                    <Button sx={{ width: '100%' }} variant='contained'>Claim</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default ClaimToken;