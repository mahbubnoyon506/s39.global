import React from 'react';
import eco from '../../assets/images/eco.png'

const Ecosystem = () => {
    return (
        <div className='bg-dark'>
            <div className='container d-md-flex align-items-center'>
                <div>
                    <h2 className='systemTitle text-start'>Looking at the DEBT ecosystem</h2>
                    <p className='systemText text-start'>
                        Blockchain and cryptocurrencies can be complex and overwhelming to many individuals. For years we have all been hearing about blockchain and many of us want to get involved, but simply don't know how. DEBT has taken the guesswork out of it. <b style={{ color: '#fff' }}>No fake meme coins here!</b>   Real projects tied to real assets, brought to you in the comfort of your own home.
                    </p>
                </div>
                <div className='d-flex justify-content-center' >
                    <img style={{ maxWidth: '682px', paddingTop: '50px', }} src={eco} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Ecosystem;