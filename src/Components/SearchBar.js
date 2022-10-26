import React from 'react'
//import { useState } from 'react';
// import { NavLink } from "react-router-dom";
import "../Styles/searchBar.css";
import SearchLogo from '../img/icons8-suche.svg';
import PlusLogo from '../img/icons8-plus.svg';
import { NavLink } from 'react-router-dom';

export default function SearchForm() {
        
  return (
    <form className="searchbar form-container">
      <button onClick="clickHandler" type="submit"><img width="17" src={SearchLogo} alt="Suche" /></button>
      {/* <label htmlFor="was">Berufbezeichnung</label> */}
      <input id='was' type="text" placeholder="Jobtitle" required></input>
      {/* <label htmlFor="wo">Ort</label> */}
      <input  id="wo" type="text" placeholder="Ort" required></input>
      <NavLink to="/fullsearch"><img src={PlusLogo} width="22" alt="Fullsearch" /></NavLink>
      {/* <label htmlFor='size'>Anzahl</label> */}
      {/* <input id='size' type="number" placeholder="20"></input>                      */}
    </form>          
  )
}