import React from 'react'
import options from '../../data/options.json'
import './AllEatsList.css'

const AllEats = () => {



  return (
    <div className="eats-wrapper">
      <div className="sort-buttons">
        <label for="cars">Filter:</label>
        <select name='filter'>
          <option>None</option>
          <option>Sweet</option>
          <option>Savoury</option>
          <option>Drinks</option>
          <option>Food</option>
          <option>Meal</option>
          <option>Snack</option>
        </select>
      </div>

      <div className='options-container'>
        {options.map((option, i) => (
          <div key={option.id} className='option'>
            <video width="50" height="50" playsinline autoplay muted loop controls className='overflow-hidden'>
              <source src="./GriddyBattle.mp4" type="video/mp4" />
              Your browser does not support the video tag :&#40;
            </video>
            <h1>{option.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllEats