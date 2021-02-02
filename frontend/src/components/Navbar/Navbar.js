import React from 'react'
import { NavWrapper, NavText, NavContainer } from './Navbar.elements'

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavText>FAQ</NavText>
        <NavText>Projects</NavText>
        <NavText>Contact</NavText>
        <NavText>Blog</NavText>
        <NavText>Movies&Music</NavText>
      </NavWrapper>
    </NavContainer>
  )
}

export default Navbar
