import React from 'react';
import CommodityProject from './CommodityProject';
import DebtBox from './DebtBox';
import Ecosystem from './Ecosystem';
import './Home.css'
import Projects from './Projects';

import Banner from './Banner';
import DesList from './DesList';
import License from './License';

const Home = () => {
    return (
        <div>
            <Banner />
            <License/>
            <DesList/>
            <DebtBox />
            <Ecosystem />
            <CommodityProject />
            <Projects />
        </div>
    );
};

export default Home;