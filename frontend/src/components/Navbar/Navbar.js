import React from 'react'
import { NavWrapper, NavText, NavContainer } from './Navbar.elements'

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavText>FAQ</NavText>
        <NavText>Contact</NavText>
        <NavText>Blog</NavText>
      </NavWrapper>
    </NavContainer>
  )
}

export default Navbar
