import React, { useEffect } from 'react';
import Agriculture from './Agriculture';
import Ecommerce from './Ecommerce';
import Mineral from './Mineral';
import S39 from './S39';

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div className='py-2 bg-darkblue' >
            <div style={{overflow:'hidden'}}>
                <S39/>
                <Mineral/>
                <Agriculture/>
                <Ecommerce/>
            </div>
        </div>
    );
};

export default Projects;