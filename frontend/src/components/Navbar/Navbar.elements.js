import styled from 'styled-components'

export const NavContainer = styled.div`
  //position: absolute;
  //top: 0;
  //left: 0;
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  width: 100vw;
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #404040;
  width: 100vw;
  height: 3rem;

  @media (max-width: 600px) {
    display: none;
  }
`

export const NavText = styled.div`
  font-size: 1.5rem;
  color: lightgray;

  &:hover {
    color: deepskyblue;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const NavHamburger = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
  height: 3rem;
  width: 3rem;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 600px) {
    display: none;
  }
`
export const NavHamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #404040;
`
export const NavHamWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 5vw;

  @media (min-width: 600px) {
    display: none;
  }
`
