import React from 'react';
import { Card } from 'react-bootstrap';

const DebtBox = () => {
    return (
        <div className='' style={{background: '#000000'}}>
            <div className='container'>

                <p className='earnSubTitle'>Start earning today</p>
                <h2 className='earnTitle'>How DEBT BOX works?</h2>
                <p>
                    Utilizing DEBT's Box's proprietary software, you can create a
                    portfolio of blockchain miners. By purchasing and managing different
                    software node licenses you can earn rewards from several asset
                    classes, all from the comfort and convenience of your own home.
                </p>
                <div className='d-grid'>
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