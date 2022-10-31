import React from 'react';
import Jobcard from './Jobcard';



export default function Suchergebnisse({jobErgebnisse}) {
  
  console.log("Suchergebnisse", jobErgebnisse);
    return (
      <div className='suchergebnisse'>
         {jobErgebnisse&&jobErgebnisse.map((job) => ( <div><Jobcard key={job.hashId} params={job} /><input type="checkbox" id={job.hashId} /></div> ))}
        </div>
    )
  }