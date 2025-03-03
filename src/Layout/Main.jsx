import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const hideNavbarOn = ["/landingPage"]

    return (
        <div>
            {!hideNavbarOn.includes(location.pathname) && <Navbar />}
            <Outlet />
        </div>
    );
};

export default Main;
