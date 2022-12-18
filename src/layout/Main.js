import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import NavMenu from './NavMenu';


const Main = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;