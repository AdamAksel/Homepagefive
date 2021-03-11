import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProjectsWrapper, ProjectsArea, ProjectsCard, ProjectsTitle, ProjectsBody, ProjectsLink } from './Projects.elements'

const Projects = () => {
const [projects, setProjects] = useState([])


useEffect(() => {
  axios
    .get('/api/projects')
    .then(res => {
      setProjects(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}, [])

  return (
    <ProjectsWrapper>
      <ProjectsArea>
      {projects.map(content => (
          <ProjectsCard key={content._id}>
            <ProjectsTitle>
              {content.title}
            </ProjectsTitle>
            <ProjectsBody>
              {content.body}
            </ProjectsBody>
            <ProjectsLink>
              {content.link}
            </ProjectsLink>
          </ProjectsCard>
        ))}
      </ProjectsArea>
    </ProjectsWrapper>
  )
}

export default Projects
