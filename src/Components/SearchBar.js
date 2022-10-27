import React from 'react'
import { useState } from 'react';
import { searchJobs } from '../utils/jobApiUtils';
import "../Styles/searchBar.css";
import SearchLogo from '../img/icons8-suche.svg';
import PlusLogo from '../img/icons8-plus.svg';
import { NavLink } from 'react-router-dom';

export default function SearchBar() {
  const [jobArt, setJobArt] = useState('');
  const [jobOrt, setJobOrt] = useState(''); 
  
  const handleChangeJobArt = (e) => {
    setJobArt(e.target.value);
  }
  const handleChangeJobOrt = (e) => { 
    setJobOrt(e.target.value);
  }

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      setJobArt('jobArt');
      setJobOrt('jobOrt');
      const { jsonData , error } = await searchJobs(jobArt, jobOrt);
      if (error) {
        console.log(error.message);
      }
      console.log("JSON Data", jsonData);
      //localStorage.setItem("token", data.token);
      //setToken(data.token);
      //setIsAuthenticated(true);
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <form className="searchbar form-container" onSubmit={handleSubmit}>
      <button type="submit"><img width="17" src={SearchLogo} alt="Suche" /></button>
      <input id='jobArt' type="text" onChange={handleChangeJobArt} placeholder="Jobtitle" required></input>
      <input  id="jobOrt" type="text" onChange={handleChangeJobOrt} placeholder="Ort" required></input>
      <NavLink to="/fullsearch"><img src={PlusLogo} width="22" alt="Fullsearch" /></NavLink>
    </form>          
  )
}