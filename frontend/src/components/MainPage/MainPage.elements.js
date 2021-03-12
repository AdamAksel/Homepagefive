import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`

export const MainBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 85vh;
  min-width: 100vw;
  padding: 50px;
`

export const MainText = styled.div`
  font-size: 1.9rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`
