import "../Styles/main.css";
import Suchergebnisse from "./Suchergebnisse";
import Bewerbung from "./Bewerbung";
import Dokumente from "./Dokumente";
import Footer from "./Footer";





export default function Main({user, jobErgebnisse}) {
  console.log("jobErgebnisse in Main", jobErgebnisse);

  return (    
      <main>
        <Suchergebnisse jobErgebnisse={jobErgebnisse}/>
        <Bewerbung />
    
        <Dokumente user={user} />
        <Footer />

        

      </main>
  )
}