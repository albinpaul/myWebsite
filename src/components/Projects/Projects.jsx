import React from "react";

class Projects extends React.Component{
    state = {
        projects: [
            {
                "title": "Classify music by genre using python and keras",
                "link": "https://github.com/Aliflail/mainproject",
                "description": "Classify music based on genre using CRNN neural networks. And then using the genre makes\
                recommendations offline to the user.",
                
            }
        ]
    }
    render(){
        const {projects} = this.state;
        return (
            <section id="projects">
                <h1>Projects</h1>
                {
                    projects.map(
                        project => (
                            <div className="project">
                               <h2 className="section__subtitle">
                                   {project.title} <a href={project.link} target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> 
                               </h2>
                               <p>{project.description} </p>
                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default Projects;