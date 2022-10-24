import React from 'react'
import Hero from '../img/hero.jpg';
import Main from '../Components/Main';

export default function Landingpage() {
  return (
    <div>
      <img src={Hero} alt="Hero-Picture" />
        <Main />
    </div>
  )
}
