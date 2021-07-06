import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/">Accueil</NavLink>
            <NavLink exact to="/about">A propos</NavLink>
        </div>
    );
};

export default Navigation;