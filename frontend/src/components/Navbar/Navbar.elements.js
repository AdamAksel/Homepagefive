import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #404040;
  width: 90vw;
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
`
