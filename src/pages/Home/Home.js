import React from 'react';
import CommodityProject from './CommodityProject';
import DebtBox from './DebtBox';
import Ecosystem from './Ecosystem';
import './Home.css'
import Projects from './Projects';


const Home = () => {
    return (
        <div>
            <DebtBox />
            <Ecosystem />
            <CommodityProject />
            <Projects />
        </div>
    );
};

export default Home;