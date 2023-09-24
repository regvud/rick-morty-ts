import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'characters'}>Characters</NavLink>
        </div>
    );
};

export {Header};