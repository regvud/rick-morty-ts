import React from 'react';
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <Outlet/>
        </>
    );
};

export {RootLayout};