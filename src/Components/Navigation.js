import React from 'react'
import { useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { NavLink } from 'react-router-dom';

export default function Navigation({ isAuthenticated, logOut, user }) {
    const [isHamburger, setHamburger] = useState(false);
        
  return ( 
        <nav className="menu">
            <button className="menu-button" onClick={() => {
                setHamburger(!isHamburger)}}>
                <DehazeIcon />
            </button>

            <div className={ isHamburger ? "nav-menu expanded" : "nav-menu" }>           
                <ul>
                { isAuthenticated && user ? (
                     <>
                     <li><NavLink to="/userdata">Nutzerdaten</NavLink></li>
                    <li onClick={logOut}>Logout</li>
                     </>
                ) : (
                    <>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Registrierung</NavLink></li>
                    </>
                )}
                    
                <NavLink to="/info"><li>Info</li></NavLink>
                </ul>
            </div>
        </nav>
  )
}