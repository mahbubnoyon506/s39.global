import React from 'react';
import { Card } from 'react-bootstrap';

const DebtBox = () => {
    return (
        <div className='' style={{ padding: '80px 0px' }}>
            <div className='container'>
                <p className='earnSubTitle'>Start earning today</p>
                <h2 className='earnTitle primary'>HOW S39 GLOBAL WORKS ?</h2>
                <p className='earnText py-4 primary'>Utilizing S39 GLOBAL proprietary software, you can create a portfolio of tangible commodities . By converting S39 token to S points, one can purchase a Minting Power license, which you can earn  from several business projects listed in Super D’Apps, all from the comfort and convenience of your own home.</p>

                <div className='row g-3'>
                    <div className='col-md-4 ' >
                        <Card className='py-4' style={{ border: '2px solid #454545', background: '#171717', minHeight: '270px' }}>
                            <Card.Body className='pb-0'>
                                <h2 className='step primary'>Step 1</h2>
                                <p className='stepText primary'>Send your S39 token to S39global.com and convert to   S point. You can further activate the minting power license.
                                </p>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='py-4' style={{ border: '2px solid #454545', background: '#171717', minHeight: '270px', }}>
                            <Card.Body className='pb-0'>
                                <h2 className='step primary'>Step 2</h2>
                                <p className='stepText primary'>
                                Earn project tokens daily through the minting process. You can watch your tokens accumulate in your wallet.
                                </p>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card className='py-4' style={{ border: '2px solid #454545', background: '#171717', minHeight: '270px' }}>
                            <Card.Body className='pb-0 '>
                                <h2 className='step primary'>Step 3</h2>
                                <p className='stepText primary'>You can switch your token and invest into other project or withdraw using DEX (Decentralized Exchange) found in our Super D’Apps platform.
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