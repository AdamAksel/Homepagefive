import styled from 'styled-components'
import img from '../img/SamolemBackground.jpg'

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`

export const MainBackground = styled.div`
  position: absolute;
  top: 1rem;
  background-size: cover;
  width: 90vw;
  min-height: 90vh;
  background-image: url(${img});
  opacity: 0.5;
  z-index: -1;
`

export const MainText = styled.div`
  font-size: 1.9rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`
