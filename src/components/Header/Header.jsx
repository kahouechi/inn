import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [header, setHeader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 100)
      setHeader(true);
    else
      setHeader(false);
  }

window.addEventListener('scroll', changeHeader);

  return (
    <div className={header ? 'h-wrapper h-scroll' : 'h-wrapper'}>
      <div className='h-container'>
        <Link to="/">
          <h1 className='m-0'>MUNCH</h1>
        </Link>

      </div>
    </div>
  )
}

export default Header