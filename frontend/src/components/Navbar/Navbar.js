import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  NavWrapper,
  NavText,
  NavContainer,
  NavHamburger,
  NavHamContainer,
  NavHamWrapper,
} from './Navbar.elements'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(0)

  const navOpenFunction = () => {
    if (navOpen === 0) {
      setNavOpen(1)
    } else {
      setNavOpen(0)
    }
  }

  return (
    <>
      <NavContainer>
        <NavWrapper>
          <NavText>
            <Link to='/FAQ'>FAQ</Link>
          </NavText>
          <NavText>
            <Link to='/projects'>Projects</Link>
          </NavText>
          <NavText>
            <Link to='/contact'>Contact</Link>
          </NavText>
          <NavText>
            <Link to='/blog'>Blog</Link>
          </NavText>
        </NavWrapper>
      </NavContainer>
      {navOpen === 0 ? (
        <NavHamburger onClick={navOpenFunction}>
          <i class='fas fa-hamburger'></i>
        </NavHamburger>
      ) : (
        <>
          <NavHamburger onClick={navOpenFunction}>
            <i class='fas fa-hamburger'></i>
          </NavHamburger>{' '}
          <NavHamWrapper>
            <NavHamContainer>
              <NavText to='/FAQ'>FAQ</NavText>
              <NavText to='/Projects'>Projects</NavText>
              <NavText to='/Contact'>Contact</NavText>
              <NavText to='/Blog'>Blog</NavText>
            </NavHamContainer>
          </NavHamWrapper>{' '}
        </>
      )}
    </>
  )
}

export default Navbar
