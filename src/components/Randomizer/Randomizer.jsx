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
      
    </div>
  )
}

export default Randomizer