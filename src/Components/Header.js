import React from 'react'
// import { useState } from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import HomeLogo from '../img/Home.svg';
import { NavLink } from "react-router-dom";
import "../Styles/header.css";

export default function Header() {
        
  return (
    <header className="header">
        <div>
        <NavLink to="/"><div style={{border: "1px solid #292b35", borderRadius: "5px", padding: "5px"}}><img src={HomeLogo} width="30" alt="Home" /></div></NavLink>
        </div>
        <SearchBar />   
        <Navigation />
    </header>
  )
}
