import React from 'react'
import '../Styles/main.css';

export default function Bewerbung() {
  return (
    <div>
      <div className='textfeld' id='bewerbung'>
        <textarea type="text" placeholder="Anrede" ></textarea>
        <br/>
        <textarea className="anschreiben" type="text" placeholder="Bewerbung" ></textarea>
      </div>
    </div>
  )
}
