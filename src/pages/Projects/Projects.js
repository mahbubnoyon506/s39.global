import React, { useEffect } from 'react';
import Agriculture from './Agriculture';
import Ecommerce from './Ecommerce';
import Mineral from './Mineral';
import S39 from './S39';

const Projects = () => {
    return (
        <div className='py-5 bg-darkblue'>
            {/* <h2 className='text-center text-uppercase primary'>Projects</h2> */}
            <div>
                <S39/>
                <Mineral/>
                <Agriculture/>
                <Ecommerce/>
            </div>
        </div>
    );
};

export default Projects;