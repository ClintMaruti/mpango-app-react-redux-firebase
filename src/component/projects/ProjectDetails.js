import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati culpa ex mollitia natus deserunt odit minus in, aut architecto officiis eius dolorum voluptas perferendis quod tempore nesciunt optio repellendus repellat.</p>                
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by Valerie odira</div>
                <div>18th August, 9p.m</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
