import React from 'react'
import { Routes, Route } from "react-router-dom";
import Registrierung from "./Components/Registrierung";
import Bewerbung from "./Components/Bewerbung";
import Dokumente from "./Components/Dokumente";
import Landingpage from './Components/Landingpage';
import Suchergebnisse from './Components/Suchergebnisse';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';


export default function App() {

  return (
    <>
      <Header />

      <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/suchergebnisse" element={<Suchergebnisse />} />
            <Route path="registrierung" element={<Registrierung />} />
            <Route path="bewerbung" element={<Bewerbung />} />
            <Route path="dokumente" element={<Dokumente />} />
      </Routes>

      <Footer/>
    </>
  )
}
