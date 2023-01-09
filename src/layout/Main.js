import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import BackToTop from '../components/backToTop/BackToTop';
import Footer from './Footer';
import NavMenu from './NavMenu';


const Main = () => {
    const { pathname } = useLocation()
    return (
        <div>
            {
                !pathname.includes('forgetpassword') &&
                <NavMenu />
            }
            <Outlet />
            {
                !pathname.includes('forgetpassword') &&
                <Footer />
            }
        </div>
    );
};

export default Main;