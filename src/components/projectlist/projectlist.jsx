/* eslint-disable react/jsx-key */
import './project.css'

export default function ProjectList(props) {

  const projects = props.projects;
    
    return (
        <div className="projects-list">
          {
            projects.map(project => {
                return (
                    <div className="project"><img src={project.img}></img></div>
                )
                
            })
          }
        </div>
    )
}