import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])  
    return (
        <div className='py-5 bg-darkblue' style={{ height: '100vh' }}>
            <h2 className='text-center text-uppercase primary'>Privacy policy</h2>
        </div>
    );
};

export default PrivacyPolicy;