import React from 'react';
import '../styles/Projects.css';
import ProjectItem from '../components/ProjectItem'
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

function Projects() {
  return (
    <div className='projects'>
      <h2 className='project__title'>Personal Project</h2>
      <div className='projects__list'>
        <ProjectItem name="unemaintendue-conseils.fr" image={project1}/>
        <ProjectItem name="HTML5/CSS#" image={project2}/>
        <ProjectItem name="React Portfolio" image={project3}/>
      </div>
    </div>
  )
}

export default Projects;