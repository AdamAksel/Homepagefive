import React, { useState } from 'react'
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
          <NavText>FAQ</NavText>
          <NavText>Projects</NavText>
          <NavText>Contact</NavText>
          <NavText>Blog</NavText>
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
              <NavText>FAQ</NavText>
              <NavText>Projects</NavText>
              <NavText>Contact</NavText>
              <NavText>Blog</NavText>
            </NavHamContainer>
          </NavHamWrapper>{' '}
        </>
      )}
    </>
  )
}

export default Navbar
