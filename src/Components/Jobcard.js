import React from 'react'
import '../Styles/jobcard.css'


export default function Jobcard({params}) {
  console.log("Jobcard-params: ",params);
    return (
      <article className='jobcard'>
        <h4>Beruf: {params.beruf}</h4>
        <h5>Titel: {params.titel} </h5>    
        Arbeitgeber: {params.arbeitgeber}<br/>      
        Externe URL: <a href={params.externeUrl} target="_blank" rel='noreferrer' >{params.arbeitgeber}</a><br/>
        Referenz Nr: {params.refnr}<br/>
      </article>
    )
  }