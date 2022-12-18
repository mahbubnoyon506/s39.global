import React from 'react';
import { Card } from 'react-bootstrap';

const DebtBox = () => {
    return (
        <div className='' style={{ background: '#000000', padding: '80px 0px' }}>
            <div className='container'>
                <p className='earnSubTitle'>Start earning today</p>
                <h2 className='earnTitle pt-5'>How DEBT BOX works?</h2>
                <p className='earnText py-5 w-lg-50'>
                    Utilizing DEBT's Box's proprietary software, you can create a
                    portfolio of blockchain miners. By purchasing and managing different
                    software node licenses you can earn rewards from several asset
                    classes, all from the comfort and convenience of your own home.
                </p>

                <div className='row g-3'>
                    <div className='col-md-4 ' >
                        <Card className='py-4' style={{ border: '2px solid #454545', background: '#171717', height: '270px' }}>
                            <Card.Body>
                                <h2 className='step'>Step 1</h2>
                                <p className='stepText'>Purchase a software mining license and activate it. Your license must be activated before it will begin mining.
                                </p>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='py-4' style={{ border: '2px solid #454545', background: '#171717', height: '270px' }}>
                            <Card.Body>
                                <h2 className='step'>Step 2</h2>
                                <p className='stepText'>
                                    Earn rewards daily through the mining process. You can watch them roll in on the Rewards section of your dashboard.
                                </p>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='py-4' style={{ border: '2px solid #454545', background: '#171717', height: '270px' }}>
                            <Card.Body>
                                <h2 className='step'>Step 3</h2>
                                <p className='stepText'>Withdraw your rewards and exchange them for other DEBT Box tokens, other currencies or use them to make DEBT Box ecosystem purchases.
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