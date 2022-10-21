import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import "../Styles/header.css";

export default function Header() {
    const [isHamburger, setHamburger] = useState(false);
        
  return (
    
    <nav className="menu">
        <button class="menu-button" onClick={() => {
            setHamburger(!isHamburger)}}>
            nav
        </button>
        <div class={ isHamburger ? "nav-menu expanded" : "nav-menu" }>
            <input className="search" type="text" placeholder="Jobtitle"></input>
            <button>search</button>
            <ul>
                
                    <li>LogIn</li>
                
                
                    <li>LogOut</li>
                

                    <li>Info</li>
                
            </ul>
        </div>
    </nav>
  )
}
