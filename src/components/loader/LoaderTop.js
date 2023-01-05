import React from 'react';
import { GridLoader } from 'react-spinners';

const LoaderTop = () => {
    return (
        <div className='container mx-auto text-center d-flex justify-content-center align-items-start' style={{ height: "100vh" }}>
            <GridLoader color="white" />
        </div>
    );
};

export default LoaderTop;