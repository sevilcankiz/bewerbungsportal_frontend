import React from 'react'
// import { useState } from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import HomeLogo from '../img/web-house.png';
import { NavLink } from "react-router-dom";
import "../Styles/header.css";

export default function Header() {
        
  return (
    <header className="header">
        <div>
        <NavLink to="/"><img width="17" src={HomeLogo} alt="Suche" /></NavLink>
        </div>
        <SearchBar />   
        <Navigation />
    </header>
  )
}
