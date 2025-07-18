import React, { useEffect } from 'react'
import ProjectBanner from '../components/ProjectBanner'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import ProjectServices from '../components/ProjectServices'

function Projects() {
   useEffect(() => {
        document.title = 'Projects | Services_Website';
      }, []);
  return (
    <div>
        <ProjectBanner />
        <Project1 />
        <Project2 />
        <Project3 />
        <ProjectServices />
    </div>
  )
}

export default Projects