import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`

export const ProjectsArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: space-around;
  min-height: 85vh;
  min-width: 100vw;
  background-color: whitesmoke;
  overflow: scroll;
  padding: 50px;
`
export const ProjectsCard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
border: 1px solid rgba(0,0,0,0.5);
height: 250px;
width: 200px;
margin: 10px;
`

export const ProjectsTitle = styled.div`
display: flex;
justify-content:center;
width: 140px;
height: 50px;
font-size: 30px;
`

export const ProjectsBody = styled.div`
display: flex;
justify-content:center;
width: 140px;
height: 120px;
font-size: 15px;
overflow: hidden;

`

export const ProjectsLink = styled.div`
display: flex;
justify-content: center;
width: 140px;
height: 20px;
font-size: 15px;
overflow:hidden;
`