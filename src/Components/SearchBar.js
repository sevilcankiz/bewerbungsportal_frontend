import React from 'react'
import { useState, useEffect } from 'react';
import { searchJobs } from '../utils/jobApiUtils';
import "../Styles/searchBar.css";
// import "../Styles/forms.css";
import SearchLogo from '../img/icons8-suche.svg';
import PlusLogo from '../img/icons8-plus.svg';
import { Navigate } from "react-router-dom";
// import Suchergebnisse from "./Suchergebnisse";

export default function SearchBar({jobErgebnisse, setJobErgebnisse}) {
  const [sucheStarten, setSucheStarten] = useState(false);
  const [isVolleSuche, setIsVolleSuche] = useState(false);
  // const [jobErgebnisse, setJobErgebnisse] = useState([]);
  const [{ 
    jobArt, 
    jobOrt
  }, setFormState] = useState({
    jobArt: "",
    jobOrt: "",
  });

  const handleChange = (e) => setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  useEffect(() => {
    
    return () => {
      setSucheStarten(false);
    };
  }, [sucheStarten]);  
  

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const formDataJson = JSON.stringify({
        "jobArt": jobArt,
        "jobOrt": jobOrt,
      });
      const jsonData = await searchJobs(formDataJson);
      
      if (jsonData) {
        setSucheStarten(true);
        setJobErgebnisse(jsonData);
      } else {        
        console.log("JSON Data is undefined" );        
      }

    } catch (error) {
      console.log(error.message);
    }
  }


  const handleVollsuche = () => {
    setIsVolleSuche(!isVolleSuche);
  }


  return (
    <>
    <div id="search-form">
      <form onSubmit={handleSubmit}>
        <div className="searchbar">
          <button type="submit"><img width="17" src={SearchLogo} alt="Suche" /></button>
          <input id='jobArt' type="text" onChange={handleChange} placeholder="Jobtitle" required></input>
          <input  id="jobOrt" type="text" onChange={handleChange} placeholder="Ort" required></input>
          <button onClick={handleVollsuche}><img src={PlusLogo} width="22" alt="Vollsuche" /></button>
        </div>
        {isVolleSuche && 
          <div className="vollsuche">
            <fieldset className="fieldsets">
              <legend>Angebotsart:</legend>
              <div>
                <label htmlFor="arbeit">Arbeit</label>
                <input id='arbeit' type="checkbox" value={1} ></input>
              </div>
              <div>
                <label htmlFor="selbstaendig">Selbst??ndig</label>
                <input id='selbstaendig' type="checkbox" value={2} ></input>
              </div>
              <div>
                <label htmlFor="ausbildung">Ausbildung bzw. duales Studium</label>
                <input id='ausbildung' type="checkbox" value={4} ></input>
              </div>
              <div>
                <label htmlFor="praktikum">Praktikum bzw. Trainee</label>
                <input id='praktikum' type="checkbox" value={34} ></input>
              </div>
            </fieldset>
            <fieldset className="fieldsets">
              <legend>Arbeitszeit:</legend>
              <div>
                <label htmlFor="vollzeit">Vollzeit</label>
                <input id='vollzeit' type="checkbox" value={"vz"} ></input>
              </div>
              <div>
                <label htmlFor="teilzeit">Teilzeit</label>
                <input id='teilzeit' type="checkbox" value={"tz"} ></input>
              </div>
              <div>
                <label htmlFor="schicht">Schicht (Nachtschicht und Wochenenden)</label>
                <input id='schicht' type="checkbox" value={"snw"} ></input>
              </div>
              <div>
                <label htmlFor="minijob">Minijob</label>
                <input id='minijob' type="checkbox" value={"mj"} ></input>
              </div>
              <div>
                <label htmlFor="heimarbeit">Heimarbeit</label>
                <input id='heimarbeit' type="checkbox" value={"ho"} ></input>
              </div>
            </fieldset>
          </div>
        }
      </form>
    </div>
    
      {sucheStarten 
       &&<Navigate to="/suchergebnisse" jobErgebnisse={jobErgebnisse} />
      }
   
      </>
  )
}