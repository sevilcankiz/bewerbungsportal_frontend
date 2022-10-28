import React from 'react';
import Jobcard from './Jobcard';



export default function Suchergebnisse({jobErgebnisse}) {
  
  console.log("Suchergebnisse", jobErgebnisse);
    return (
      <>
         {jobErgebnisse&&jobErgebnisse.map((job) => ( <Jobcard key={job.hashId} params={job} /> ))}
      </>
    )
  }