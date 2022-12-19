import React from 'react';
import Banner from './Banner';
import DesList from './DesList';
import License from './License';
import Partnership from './Partnership';
import DebtBox from './DebtBox';
import Ecosystem from './Ecosystem';
import './Home.css'
import Projects from './Projects';
import Introduction from './Introduction';

const Home = () => {
    return (
        <div className='bg-darkblue'>
            <Banner />
            <License />
            <Partnership />
            <DesList />
            {/* <Introduction /> */}
            <DebtBox />
            <Ecosystem />
            <Projects />
        </div>
    );
};

export default Home;