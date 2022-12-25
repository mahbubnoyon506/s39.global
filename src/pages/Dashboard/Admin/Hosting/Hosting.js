import { Button } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
import './hosting.css'

const Hosting = () => {

    return (
        <div>
            <p className='hosting-title'>S39.Global Hosting</p>
            <div className='d-flex justify-content-center'>
                <div>
                    <Card className='py-4' style={{ border: '3px solid #6BEDD4', borderTop: 'none', background: '#171717', minHeight: '270px' }}>
                        <h2 className='primary text-center'>VBOX</h2>
                        <div style={{ background: '#6BEDD4', height: '3px' }}></div>
                        <Card.Body className='pb-0 '>
                            <p className='card-value text-center'>0</p>
                            <p className='hostingText text-center'>Licence coverage</p>
                            <p className='text-center primary'>0 of 0</p>
                        </Card.Body>

                    </Card>
                    <div className='d-flex justify-content-center py-4'>
                        <Button
                            sx={{
                                borderRadius: "10px",
                                background: "#6BEDD4",
                                color: "#000",
                                marginRight: "10px",
                                fontWeight: "700",
                                "&:hover": { background: "#6BEDD4" },
                            }}
                            variant='contained'>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hosting;