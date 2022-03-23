import React from "react";
import Tag from "../Tag/Tag";
import './WorkExperience.css';

class WorkExperience extends React.Component{
    state = {
        jobs: [
            {
                "company": "Oracle",
                "title": "Full Stack Developer",
                "description": 
                [ 
                    "Migrated 2 backend PHP scripts to Java micro-services.",
                    "Worked on SRE and Frontend Teams in OFSC.", 
                    "Reduced the memory usage of a microservice by 14GB and fixed memory leak of a\
                    C++ microservice .",
                    "Capacity analysis like RAM and No of replicas of stats-provider\
                    microservice by simulation in Python.", 
                    "Maintenance of the microservices and background scripts in the Statistics team."
                ],
                "toolset": [
                    // <img src="https://img.icons8.com/color/60/000000/c-plus-plus-logo.png" alt="C++ icon" title="C++"/>,
                    // <img src="https://img.icons8.com/color/60/000000/java-coffee-cup-logo--v1.png" alt="Java icon" title="Java"/>,
                    // <img src="https://img.icons8.com/ios/60/000000/sql.png" alt="SQL icon" title="SQL"/>,
                    // <img src="https://img.icons8.com/ios-glyphs/60/000000/php.png" alt="PHP icon" title="PHP"/>,
                    // <img src="https://img.icons8.com/color/60/000000/kubernetes.png" alt="Kubernetes icon" title="Kubernetes"/>
                    <Tag tagName="C++"/>,
                    <Tag tagName="Java"/>,
                    <Tag tagName="Spring"/>,
                    <Tag tagName="JS"/>,
                    <Tag tagName="PHP"/>,
                    <Tag tagName="SQL"/>,
                    <Tag tagName="Kubernetes"/>,
                    
                    
                ]
            },
            {
                "company": "Flytxt",
                "title": "Devops Engineer",
                "description": 
                [ 
                    "Helped in moving the product to GCP and AWS.",
                    "Maintain the alerts in our internal monitoring and alerting tool.", 
                    "Created a backup and restore mechanism for Hbase tables."
                ],
                "toolset": [
                    <Tag tagName="Bash"/>,
                    <Tag tagName="Linux"/>,
                    <Tag tagName="Python"/>,
                    <Tag tagName="AWS"/>,
                    <Tag tagName="Angular"/>,
                ]
            }
        ]
    }
    render(){
        const {jobs} = this.state;
        return (
            <section id="workexperience">
                <h1 className="section__title">Work Experience</h1>
                {
                    jobs.map(
                        job => (
                            <div className="container">
                                <h2 className="section__subtitle job__title"> {job.title} at {job.company} </h2>
                                <h3>Tools Used</h3>
                                <div className="tools">
                                {
                                    job.toolset.map(
                                       tool => tool
                                    )
                                }
                                </div>
                                <h3>Tasks</h3>
                                <ol>
                                    {job.description.map(
                                        point => <li> {point}</li>
                                    )}
                                </ol>
                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default WorkExperience;