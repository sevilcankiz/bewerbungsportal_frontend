import React from 'react'
import { Routes, Route } from "react-router-dom";
import Suchergebnisse from "./Suchergebnisse";
import Registrierung from "./Registrierung";
import "../Styles/main.css";

export default function Main() {
  return (
    <main style={{border: "1px solid blue"}}>
    <Routes>
          <Route path="/" element={<Suchergebnisse />} />
          <Route path="/register" element={<Registrierung />} />

          
          
          <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
    </main>
  )
}
