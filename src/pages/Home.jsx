import React from 'react'
import HomeHero from '../components/Heroes/HomeHero'
import Quiz from '../components/Quiz/Quiz'
import Randomizer from '../components/Randomizer/Randomizer'

const Home = () => {
  return (
    <div className='page'>
      {/* <HomeHero /> */}
      {/* <Quiz /> */}
      <Randomizer />
    </div>
  )
}

export default Home