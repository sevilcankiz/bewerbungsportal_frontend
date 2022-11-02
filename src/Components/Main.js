import "../Styles/main.css";
import Suchergebnisse from "./Suchergebnisse";
import Bewerbung from "./Bewerbung";
import Dokumente from "./Dokumente";
import Footer from "./Footer";




export default function Main({user}) {
  return (    
      <main>
        <Suchergebnisse />
        <Bewerbung />
        <Dokumente  user={user} />
        <Footer />
      </main>
  )
}