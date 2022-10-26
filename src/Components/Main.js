import React from 'react'
import { Routes, Route } from "react-router-dom";
import Suchergebnisse from "./Suchergebnisse";
import Registrierung from "./Registrierung";
import Anmeldung from "./Anmeldung";
import Nutzerdaten from "./Nutzerdaten";
import "../Styles/main.css";

export default function Main({ isAuthenticated, setToken, setIsAuthenticated }) {
  return (
    <Routes>
        <Route path="/" element={<Suchergebnisse />} />
        <Route path="/register" element={<Registrierung isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />
        <Route path="/login" element={<Anmeldung isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setToken={setToken} />} />
        <Route path="/userdata" element={<Nutzerdaten />} />
    </Routes>
  )
}
