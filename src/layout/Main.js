import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Footer from './Footer';
import NavMenu from './NavMenu';


const Main = () => {
    const { pathname } = useLocation()
    let content = ''
    if (pathname.includes('login')) {
        content =
            <div>
                <Outlet />
            </div>
    }else if (pathname.includes('signup')) {
        content =
            <div>
                <Outlet />
            </div>
    }else if (pathname.includes('forgetpassword')) {
        content =
            <div>
                <Outlet />
            </div>
    }
    else if (pathname.includes('reset-password')) {
        content =
            <div>
                <Outlet />
            </div>
    }else if (pathname.includes('otp')) {
        content =
            <div>
                <Outlet />
            </div>
    } else {
        content =
            <div>
                <NavMenu />
                <Outlet />
                <Footer />
            </div>
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default Main;