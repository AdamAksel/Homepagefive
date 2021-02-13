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
          <Link to='/FAQ' style={{ textDecoration: 'none' }}>
            <NavText>FAQ</NavText>
          </Link>
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <NavText>Projects</NavText>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <NavText>Contact</NavText>
          </Link>
          <Link to='/blog' style={{ textDecoration: 'none' }}>
            <NavText>Blog</NavText>
          </Link>
        </NavWrapper>
      </NavContainer>
      {navOpen === 0 ? (
        <NavHamburger onClick={navOpenFunction}>
          <i className='fas fa-hamburger'></i>
        </NavHamburger>
      ) : (
        <>
          <NavHamburger onClick={navOpenFunction}>
            <i className='fas fa-hamburger'></i>
          </NavHamburger>{' '}
          <NavHamWrapper>
            <NavHamContainer>
              <Link to='/FAQ' style={{ textDecoration: 'none' }}>
                <NavText>FAQ</NavText>
              </Link>
              <Link to='/projects' style={{ textDecoration: 'none' }}>
                <NavText>Projects</NavText>
              </Link>
              <Link to='/contact' style={{ textDecoration: 'none' }}>
                <NavText>Contact</NavText>
              </Link>
              <Link to='/blog' style={{ textDecoration: 'none' }}>
                <NavText>Blog</NavText>
              </Link>
            </NavHamContainer>
          </NavHamWrapper>{' '}
        </>
      )}
    </>
  )
}

export default Navbar
