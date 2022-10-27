import React from 'react'
// import { useState } from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import HomeLogo from '../img/Home.svg';
import { NavLink } from "react-router-dom";
import "../Styles/header.css";

export default function Header({ isAuthenticated, logOut, user }) {
        
  return (
    <header className="header">
      <NavLink to="/">
        <div className='home-logo'><img src={HomeLogo} width="30" alt="Home" />
        </div>
      </NavLink>        
      <SearchBar />   
      <Navigation isAuthenticated={isAuthenticated} user={user} logOut={logOut} />
    </header>
  )
}
