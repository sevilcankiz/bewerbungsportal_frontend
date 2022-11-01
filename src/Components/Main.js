import Suchergebnisse from "./Suchergebnisse";
import "../Styles/main.css";
import Bewerbung from "./Bewerbung";
import Dokumente from "./Dokumente";




export default function Main({ isAuthenticated, setToken, setIsAuthenticated, user }) {
  return (    
      <main>
        <Suchergebnisse/>
        <Bewerbung/>
        <Dokumente/>
      </main>
  )
}