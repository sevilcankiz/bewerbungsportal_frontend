import React from 'react'
import "../Styles/footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
      <ul className='footer'>
        <Link className="li" to="/suchergebnisse" >Suchergebnisse</Link>
        <Link className="li" to="/bewerbung">Bewerbung</Link>
        <Link className="li" to="/dokumente">Dokumente</Link>
    </ul>
    </div>
  )
}
