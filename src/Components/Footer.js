import React from 'react'
import "../Styles/footer.css";
import {HashLink as Link } from "react-router-hash-link";


export default function Footer() {
  return (
    <div>
      <ul className='footer'>
        <Link className="li" to="#suchergebnisse" smooth >Suchergebnisse</Link>
        <Link className="li" to="#bewerbung" smooth >Bewerbung</Link>
        <Link className="li" to="#dokumente" smooth >Dokumente</Link>
    </ul>
    </div>
  )
}
