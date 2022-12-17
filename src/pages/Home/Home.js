import React from 'react';
import Banner from './Banner';
import DesList from './DesList';
import License from './License';

const Home = () => {
    return (
        <div>
            <Banner />
            <License/>
            <DesList/>
        </div>
    );
};

export default Home;