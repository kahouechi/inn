import React from 'react'
import options from '../../data/options.json'
import './AllEatsList.css'

const AllEats = () => {
  return (
    <div className='all-eats-container'>
      {options.map((option, i) => (
        <div key={option.id} className='option'>
          <video width="100" height="100" playsinline autoplay muted loop controls className='overflow-hidden'>
            <source src="./GriddyBattle.mp4" type="video/mp4" />
            Your browser does not support the video tag :&#40;
          </video>
          <h1>{option.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default AllEats