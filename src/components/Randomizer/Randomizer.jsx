import React, { useState } from 'react'
import options from '../../data/options.json'
import './Randomizer.css'

const Randomizer = () => {

  const [randomOption, setRandomOption] = useState(null);
  const randomize = () => {
    setRandomOption(Math.floor(Math.random() * options.length))
    
  }


  return (
    <div className='randomizer-wrapper'>
      <button onClick={randomize}>RANDOMIZE!!!</button>
      <p>{randomOption !== null && options[randomOption].name}</p>
      {randomOption !== null && 
        <video width="320" height="320" loop autoplay muted playsinline>
          <source src="./GriddyBattle.mp4" type="video/mp4" />
          Your browser does not support the video tag :&#40;
        </video>
      }
    </div>
  )
}

export default Randomizer