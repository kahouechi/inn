import React, { useState } from 'react'
import options from '../../data/options.json'

const Randomizer = () => {

  const [randomOption, setRandomOption] = useState(null);
  const randomize = () => {
    setRandomOption(Math.floor(Math.random() * options.length))
    console.log(randomOption);
  }


  return (
    <div>
      <button onClick={randomize}>Randomize</button>
      <div>{randomOption !== null && options[randomOption].name}</div>
    </div>
  )
}

export default Randomizer