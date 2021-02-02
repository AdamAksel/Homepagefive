import React from 'react'
import { MainWrapper, MainText, MainBackground } from './MainPage.elements'

const MainPage = () => {
  return (
    <MainWrapper>
      <MainBackground />
      <MainText>
        I'm Adam Carlsson, a programmer.
        <br /> If you need help developing a website
        <br /> click contact to get in touch.
      </MainText>
    </MainWrapper>
  )
}

export default MainPage
