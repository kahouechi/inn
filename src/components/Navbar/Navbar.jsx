import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { IoMdMenu } from "react-icons/io"


const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 100)
      setNavbar(true);
    else
      setNavbar(false);
  }

  window.addEventListener('scroll', changeNavbar);

  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <div className={navbar ? 'navbar-wrapper navbar-scroll' : 'navbar-wrapper'}>
      <div className='navbar-container'>

        <Link to="/">
          <h1>INNITEATS</h1>
        </Link>

        <div className="navbar-menu"
          style={getMenuStyles(menuOpened)}
          onClick={() => setMenuOpened((prev)=>!prev)}
        >
          <Link to="/">HOME</Link>
          <Link to="/all-eats">ALL EATS</Link>
          <Link to="/favs">FAVS</Link>
        </div>

        <div className="navbar-mobile-button" onClick={() => setMenuOpened((prev)=>!prev)}>
          <IoMdMenu size={25}/>
        </div>

      </div>
    </div>
  )
}

export default Navbar