import React from 'react'
import "./projectcard.scss"


const ProjectCard = (props) => {
  return (
    <div className='projectCard'>
      <div className="details">
        <img src={props.image} alt="image" className='card-image' />
        <div className="project-details">
          <div className="name">{props.name}</div>
          <a href={props.link} target='_blank' className='visit'>
          <i className="fa-solid fa-arrow-up-right-from-square visit-icon"></i>
          Visit
          </a>
        </div>
      </div>     
    </div>
  )
}

export default ProjectCard