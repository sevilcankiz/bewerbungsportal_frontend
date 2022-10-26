import React from 'react'
import { useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const [isHamburger, setHamburger] = useState(false);
        
  return ( 
        <nav className="menu">
            <button className="menu-button" onClick={() => {
                setHamburger(!isHamburger)}}>
                <DehazeIcon />
            </button>

            <div className={ isHamburger ? "nav-menu expanded" : "nav-menu" }>           
                <ul>
                    <NavLink to="/login"><li>LogIn</li></NavLink>
                    <NavLink to="/register"><li>Register</li></NavLink>
                    <NavLink to="/info"><li>Info</li></NavLink>
                </ul>
            </div>
        </nav>
  )
}