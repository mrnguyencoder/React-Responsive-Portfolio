import React from 'react'

function ProjectItem({image, name}) {
  return (
    <div className='project__item'>
        <div style={{backgroundImage: `url(${image})`}}
            className='bgImage'>
        </div>
        <h2>{name}</h2>
    </div>
  )
}

export default ProjectItem;