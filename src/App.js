import { useEffect, useState } from "react";
import { getUser } from "./utils/dbUtils";
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Registrierung from "./Components/Registrierung";
import Bewerbung from "./Components/Bewerbung";
import Dokumente from "./Components/Dokumente";
import Landingpage from './Components/Landingpage';
import Suchergebnisse from './Components/Suchergebnisse';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Anmeldung from './Components/Anmeldung';
import Nutzerdaten from './Components/Nutzerdaten';
import './App.css';

export default function App() {
  
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const { content } = await getUser(token);

        console.log("content", content);

        setUser(content);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        console.log(error.message);
      }
    };

    token && validateToken();
  }, [token]);


  return (
    <>
      <Header />

      <Routes>
            <Route path="/" element={<Landingpage />} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />
            <Route path="/suchergebnisse" element={<Suchergebnisse />} />
            <Route path="/bewerbung" element={<Bewerbung />} />
            <Route path="/dokumente" element={<Dokumente />} />
            <Route path="/register" element={<Registrierung isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />
            <Route path="/login" element={<Anmeldung isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />
            <Route path="/userdata" element={<Nutzerdaten />} />
      </Routes>

      <Footer/>
    </>
  )
}
