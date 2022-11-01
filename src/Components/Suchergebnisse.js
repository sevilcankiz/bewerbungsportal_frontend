import React from 'react';
import Jobcard from './Jobcard';



export default function Suchergebnisse({jobErgebnisse}) {
  
    
    return (
      <div className='suchergebnisse' id='suchergebnisse'>
         {jobErgebnisse&&jobErgebnisse.map((job) => ( <div className='job-cards'><Jobcard key={job.hashId} params={job} /><input type="checkbox" id={job.hashId} /></div> ))}
        </div>
    )
  }