import React, { useEffect } from 'react';

const HowItworks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])  
    return (
        <div className='py-5 bg-darkblue' style={{ height: '40vh' }}>
            <h2 className='text-center text-uppercase primary'>How It works</h2>
        </div>
    );
};

export default HowItworks;