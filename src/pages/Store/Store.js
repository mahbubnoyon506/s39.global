import React, { useEffect } from 'react';

const Store = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])  
    return (
        <div className='py-5 bg-darkblue' style={{ height: '40vh' }}>
            <h2 className='text-center text-uppercase primary'>Store</h2>
        </div>
    );
};

export default Store;