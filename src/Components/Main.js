import React from 'react'
import { Routes, Route } from "react-router-dom";
import Suchergebnisse from "./Suchergebnisse";
import Registrierung from "./Registrierung";
import "../Styles/main.css";

export default function Main() {
  return (
    <Routes>
          <Route path="/" element={<Suchergebnisse />} />
          <Route path="registrierung" element={<Registrierung />} />
    </Routes>
  )
}
