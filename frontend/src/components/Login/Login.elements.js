import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: flex-start;
  min-height: 85vh;
`

export const LoginArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 85vh;
`

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export const ModalArea = styled.div`
  position: absolute;
  top: 5vh;
  left: 5vw;
  width: 90vw;
  height: 90vh;
  background-color: white;
  z-index: 1001;
`

export const ModalLeft = styled.div`
  position: absolute;
  left: 5vw;
  top: 5vh;
  height: 85vh;
  width: 40vw;
  overflow: scroll;
`
export const ModalRight = styled.div`
  position: absolute;
  left: 50vw;
  top: 5vh;
  height: 85vh;
  width: 40vw;
  overflow: scroll;
`

export const TextArea = styled.textarea`
  overflow: scroll;
`

