import React from 'react';
import project from '../../assets/images/project.png'


const CommodityProject = () => {
    return (
        <div className='bg-dark' style={{padding: '80px 0px'}}>
            <div className='container'>
            <h2 className='commodityTitle'>Check out some of our <br />  commodity projects </h2>
            <div className='d-flex justify-content-center' >
            <img style={{maxWidth: '682px', paddingTop: '50px',}} src={project} alt="" />
            </div>
            </div>
        </div>
    );
};

export default CommodityProject;