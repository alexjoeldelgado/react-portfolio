import React, { Component } from "react";
import projects from "../projects.json";
import M from "materialize-css";

class Projects extends Component {
    componentDidMount(){
        let carousel = document.querySelectorAll(".carousel");
        M.Carousel.init(carousel, {});
    }
    render() {
        return (
            <div>
                {projects.projects.map(project => {
                    return (
                        <div className='wrapper col m4 s12 card small center carousel-item' id='portfolioCard'>
                            <img id='portfolioImage'className='activator responsive-img' src={project.screenshot} alt="portfolio item" />
                                <div className='card-content portfolioCtnt'>
                                    <div className='card-title activator white-text text-darken-4'>
                                        {project.name}
                                        <i className='material-icons right'>more_vert</i>
                                    </div>
                                </div>
                                <div className='card-reveal'>
                                    <div className='card-title grey-text text-darken-4'>
                                        {project.name}
                                        <i className='material-icons right'>close</i>
                                    </div>
                                    <h6 className="black-text">Description: </h6>
                                    <p>{project.dscr}</p>
                                    <h6 className="black-text">Technologies Used: </h6>
                                    <p>{project.tech}</p>
                                    <a href={project.urlD} target='_blank' rel="noopener noreferrer">Deployed Project</a>
                                    <br/>
                                    <a href={project.urlG} target='_blank' rel="noopener noreferrer">Github</a>
                            </div>
                        </div>
                    )
                })}
            
            </div>
        )
    }
}

export default Projects;