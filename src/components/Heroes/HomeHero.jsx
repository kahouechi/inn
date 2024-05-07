import React from 'react'
import './Hero.css'
import { FaRegFaceGrinTongueWink } from "react-icons/fa6";

const HomeHero = () => {
  return (
    <div className="hero-wrapper bg-[#abc99f]">
      <div className="hero-container">
        <h1>WHAT WE GETTING TODAY LADIES?!</h1>
        <FaRegFaceGrinTongueWink size={100}/>
      </div>
    </div>
  )
}

export default HomeHero