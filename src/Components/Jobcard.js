import React from 'react'
import '../Styles/main.css'


export default function Jobcard({params}) {
  console.log("Jobcard-params: ",params);
    return (
      <article>
        <p>Beruf: {params.beruf}</p>      
        <p>Titel: {params.titel}</p>      
        <p>Arbeitgeber: {params.arbeitgeber}</p>      
        <p>Externe URL: {params.externeUrl}</p>
        <p>Referenz Nr: {params.refnr}</p>
      </article>
    )
  }