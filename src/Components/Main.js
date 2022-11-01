import Suchergebnisse from "./Suchergebnisse";
import "../Styles/main.css";
import Bewerbung from "./Bewerbung";
import Dokumente from "./Dokumente";




export default function Main({user}) {
  return (    
      <main>
        <Suchergebnisse />
        <Bewerbung />
        <Dokumente user={user} />
      </main>
  )
}