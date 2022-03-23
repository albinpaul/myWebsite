import React from "react";
import './Projects.css';
import Tag from "../Tag/Tag";
import jenkinsImage from "./resources/JenkinsJob.png";
import SlackIntegration from "./resources/SlackIntegration.png";

class Projects extends React.Component{
    state = {
        projects: [
            {
                "title": "Automating Acceptance test in VM",
                "description": "Automate long acceptance test in my Virtual Machine and made slack integration.",
                "imageSrcs": [
                    jenkinsImage,
                    SlackIntegration
                ],
                "tools": [
                    <Tag tagName="Helm"/>,
                    <Tag tagName="Kubernetes"/>,
                    <Tag tagName="Slack"/>,
                    <Tag tagName="Jenkins"/>,
                ]
            },
            {
                "title": "Created my own Interpretor",
                "link": "https://github.com/albinpaul/Language",
                "description": "This is language parser using latest C++ features and basic language grammar.",
                "imageSrcs": [
                    "https://raw.githubusercontent.com/albinpaul/Language/master/Torro.png"
                ],
                "tools": [
                    <Tag tagName="C++17"/>,
                    <Tag tagName="Cmake"/>,
              
                ]
            },
            {
                "title": "Classify music by Genre",
                "link": "https://github.com/Aliflail/mainproject",
                "description": "It classifies music based on genre using CRNN neural networks.",
                "tools": [
                    <Tag tagName="Keras"/>,
                    <Tag tagName="Python"/>,
                    <Tag tagName="Tensorflow"/>,
                ]
            },
            
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
                                   {project.title} {
                                       project.link && <a href={project.link} target="_blank">
                                           <i class="fa-solid fa-arrow-up-right-from-square">
                                               </i>
                                        </a>
                                        } 
                               </h2>
                               <div className="tools">
                                {
                                    project.tools.map(
                                       tool => tool
                                    )
                                }
                                </div>
                                {project.imageSrcs?
                                    <details className="collapsible_projects">
                                    <summary>{project.description}</summary>
                                    {
                                        project.imageSrcs.map(
                                            imageSrc=> <img src={imageSrc}/>
                                        ) 
                                    }
                                </details>
                                : <p> {project.description} </p>    
                            }               
                                
                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default Projects;