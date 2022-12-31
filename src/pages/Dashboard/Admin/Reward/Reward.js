import React from 'react';
import { Card } from 'react-bootstrap';
import { BsDashLg } from 'react-icons/bs';
import { RxDash } from 'react-icons/rx';

const Reward = () => {
    const rewards = [
        {
            "name": "BGLD",
            "background": "linear-gradient(to right top, #d57efe, #af5fdd, #8941bd, #64249e, #3e0180)",
            "color": "linear-gradient(to right top, #d57efe, #af5fdd, #8941bd, #64249e, #3e0180)",
        },
        {
            "name": "OLG",
            "background": "linear-gradient(to right top, #ffff8b, #e9e56e, #d4cc51, #bfb332, #aa9b06)",
            "color": "linear-gradient(to right top, #ffff8b, #e9e56e, #d4cc51, #bfb332, #aa9b06)",
        },
        {
            "name": "DEBT",
            "background": "linear-gradient(to right bottom, #afffff, #8be5e0, #68ccc1, #44b3a1, #199a81)",
            "color": "linear-gradient(to right bottom, #afffff, #8be5e0, #68ccc1, #44b3a1, #199a81)",
        },
        {
            "name": "NATG",
            "background": "linear-gradient(to right bottom, #76d6cd, #51bdc5, #32a3bb, #1e89ae, #206f9d)",
            "color": "linear-gradient(to right bottom, #76d6cd, #51bdc5, #32a3bb, #1e89ae, #206f9d)",
        },
        {
            "name": "GROW",
            "background": "linear-gradient(to right bottom, #52fe8e, #42e670, #31cf51, #1eb831, #00a100)",
            "color": "linear-gradient(to right bottom, #52fe8e, #42e670, #31cf51, #1eb831, #00a100)",
        },
        {
            "name": "XPLR",
            "background": "linear-gradient(to right bottom, #ff46de, #e130b2, #c21d8a, #a00c66, #7e0047)",
            "color": "linear-gradient(to right bottom, #ff46de, #e130b2, #c21d8a, #a00c66, #7e0047)",
        },
        {
            "name": "ALUM",
            "background": "linear-gradient(to right bottom, #fc9748, #e97a34, #d65d22, #c23d11, #ad1004)",
            "color": "linear-gradient(to right bottom, #fc9748, #e97a34, #d65d22, #c23d11, #ad1004)",
        }
    ]

    return (
        <div className=''>
            <h5 className="dashboard-title">Reward</h5>
            <div className='row g-5'>
                {
                    rewards.map(reward =>
                        <div className='col-md-6 col-lg-3 align-items-center'>
                            <Card className='' style={{ borderRadius: '30px', background: '#262626' }}>
                                <Card.Body>
                                    <div className='d-flex justify-content-center'>
                                        <div className='d-flex justify-content-center align-items-center' style={{ width: '100px', height: '100px', background: `${reward.background}`, borderRadius: '50px' }}>
                                            <div className='d-flex justify-content-center align-items-center' style={{ width: '70px', height: '70px', background: '#262626', borderRadius: '50px' }}><BsDashLg size={30} color='#fff' /> </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '-50px' }}><p className='fs-5 fw-bold text-center' style={{ background: '#262626', padding: '10px 5px', color: `#fff` }}>{reward.name}< RxDash className='d-block mx-auto' /></p></div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reward;