import Header from "./Header";
import Footer from "./Footer";
import Suchergebnisse from "./Suchergebnisse";
import "../Styles/main.css";




export default function Main({ isAuthenticated, setToken, setIsAuthenticated, user }) {
  return (    
      <main>
        <Header />
        <Suchergebnisse/>
        <Footer />
      </main>
  )
}