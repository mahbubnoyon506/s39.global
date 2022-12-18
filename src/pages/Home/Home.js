import React from 'react';
import Banner from './Banner';
import DesList from './DesList';
import License from './License';
import CommodityProject from './CommodityProject';
import DebtBox from './DebtBox';
import Ecosystem from './Ecosystem';
import './Home.css'
import Projects from './Projects';
import Introduction from './Introduction';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#000' }}>
            <Banner />
            <License />
            <DesList />
            <Introduction />
            <DebtBox />
            <Ecosystem />
            <CommodityProject />
            <Projects />
        </div>
    );
};

export default Home;