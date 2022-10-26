import Header from "./Header";
import Suchergebnisse from "./Suchergebnisse";
import Footer from "./Footer";




export default function Main({ isAuthenticated, setToken, setIsAuthenticated }) {
  return (
    <>
      <div >
        <Header />
        <Suchergebnisse/>
        <Footer />
      </div>
      
    </>
  )
}