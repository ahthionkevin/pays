import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
            <NavLink exact to="/about" activeClassName="nav-active">A propos</NavLink>
            <NavLink exact to="/News" activeClassName="nav-active">News</NavLink>
        </div>
    );
};

export default Navigation;