import React from 'react';
import eco from '../../assets/images/eco.png'

const Ecosystem = () => {
    return (
        <div className='' >
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <h2 className='systemTitle'>S39 GLOBAL ECOSYSTEM</h2>
                        <p className='systemText'>
                            Blockchain and cryptocurrencies can be complex and overwhelming to many individuals. For years we have been hearing about blockchain and many of us want to get involved, but simply don't know how.
                            <br /> <br />
                            S39 GLOBAL has taken the guesswork out of it. No fake meme tokens here! Real projects tied to real assets, brought to you in the comfort of your own home.
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' style={{ paddingTop: '50px', }} src={eco} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ecosystem;