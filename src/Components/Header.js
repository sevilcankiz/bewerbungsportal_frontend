import React from 'react'
import { useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
// import { NavLink } from "react-router-dom";
import "../Styles/header.css";

export default function Header() {
    const [isHamburger, setHamburger] = useState(false);
        
  return (
    
    <nav className="menu">
        <button class="menu-button" onClick={() => {
            setHamburger(!isHamburger)}}>
            <DehazeIcon />
        </button>

        <div className={ isHamburger ? "nav-menu expanded" : "nav-menu" }>
            <div className="searchbar">
                <input className="search" type="text" placeholder="Jobtitle"></input>
                <input type="number" placeholder="Plz"></input>
                <button>search</button>
            </div>
            <ul>
                <li>LogIn</li>
                <li>LogOut</li>
                <li>Info</li>
            </ul>
        </div>
    </nav>
  )
}
