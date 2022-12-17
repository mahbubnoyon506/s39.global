import React from 'react';
import { Card } from 'react-bootstrap';

const DebtBox = () => {
    return (
        <div className='' style={{background: '#000000', padding: '80px 0px'}}>
            <div className='container'>
                <p className='earnSubTitle'>Start earning today</p>
                <h2 className='earnTitle pt-5'>How DEBT BOX works?</h2>
                <p className='earnText py-5 w-50'>
                    Utilizing DEBT's Box's proprietary software, you can create a
                    portfolio of blockchain miners. By purchasing and managing different
                    software node licenses you can earn rewards from several asset
                    classes, all from the comfort and convenience of your own home.
                </p>
                <div className='row g-5'>
                    <div className='col-md-4'>
                        <Card className='bg-dark py-4' style={{ border: '2px solid #454545' }}>
                            <Card.Body>
                                <h2 className='step'>Step 1</h2>
                                <p className='stepText'>Purchase a software mining license and activate it. Your license must be activated before it will begin mining.
                                </p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='bg-dark py-4' style={{ border: '2px solid #454545' }}>
                            <Card.Body>
                                <h2 className='step'>Step 1</h2>
                                <p className='stepText'>Purchase a software mining license and activate it. Your license must be activated before it will begin mining.
                                </p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='bg-dark py-4' style={{ border: '2px solid #454545' }}>
                            <Card.Body>
                                <h2 className='step'>Step 1</h2>
                                <p className='stepText'>Purchase a software mining license and activate it. Your license must be activated before it will begin mining.
                                </p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DebtBox;