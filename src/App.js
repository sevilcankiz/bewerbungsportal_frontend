import { useEffect, useState } from "react";
import { getUser } from "./utils/dbUtils";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Registrierung from "./Components/Registrierung";
import Landingpage from './Components/Landingpage';
import Suchergebnisse from './Components/Suchergebnisse';
import Header from './Components/Header';
import Main from './Components/Main';
import Anmeldung from './Components/Anmeldung';
import Nutzerdaten from './Components/Nutzerdaten';
import ProtectedLayout from './Components/ProtectedLayout';
import './App.css';
import SearchBar from "./Components/SearchBar";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  const [jobErgebnisse, setJobErgebnisse] = useState([]);

  const navigate = useNavigate();

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

  
  useEffect(() => {

  }, [jobErgebnisse]);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} user={user} logOut={logOut} />
      <SearchBar jobErgebnisse={jobErgebnisse} setJobErgebnisse={setJobErgebnisse}/>
      <Routes>
        <Route
          path="/"
          element={<Landingpage
          isAuthenticated={isAuthenticated}
          user={user} />}
        />
        <Route path="suchergebnisse" element={<Suchergebnisse jobErgebnisse={jobErgebnisse}/>} />
        <Route
          path="user"
          element={<ProtectedLayout isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<Nutzerdaten user={user} setUser={setUser} />} />
          <Route path="main" element={<Main user={user} jobErgebnisse={jobErgebnisse} />} />
        </Route>
        <Route
          path="register"
          element={
            <Registrierung
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setToken={setToken}
            />
          }
        />
        <Route
          path="login"
          element={
            <Anmeldung
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setToken={setToken}
            />
          }
        />
      </Routes>
    </div>
  );
}
