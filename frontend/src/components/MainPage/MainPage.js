import React from 'react'
import { MainWrapper, MainText, MainBackground } from './MainPage.elements'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <MainWrapper>
      <MainBackground>
        <MainText>
          I'm Adam Carlsson, a programmer.
          <br /> If you need help developing a website
          <br /> click contact to get in touch
          <Link to='/Login' style={{ textDecoration: 'none', cursor: 'text' }}>
            .
          </Link>
        </MainText>
      </MainBackground>
    </MainWrapper>
  )
}

export default MainPage
