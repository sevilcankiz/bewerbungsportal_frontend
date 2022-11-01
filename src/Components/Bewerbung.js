import React from 'react'
import "../Styles/forms.css";

export default function Bewerbung() {
  return (
    <form id='bewerbung'>
      <div className='textfeld'>
        <textarea type="text" placeholder="Anrede" ></textarea>
        <textarea className="anschreiben" type="text" placeholder="Bewerbung" ></textarea>
      </div>
        <div className="button-container">
            <button type="submit">Bewerben</button>
        </div>
    </form>
  )
}
