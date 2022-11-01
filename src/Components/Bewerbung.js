import React from 'react'
import '../Styles/main.css';

export default function Bewerbung() {
  return (
    <div id='bewerbung'>
      <div className='textfeld'>
        <textarea type="text" placeholder="Anrede" ></textarea>
        <br/>
        <textarea className="anschreiben" type="text" placeholder="Bewerbung" ></textarea>
      </div>
    </div>
  )
}
