import React from 'react';
import { Outlet } from 'react-router-dom';
import NAv from '../Pages/Shared/Nav/NAv';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NAv></NAv>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;