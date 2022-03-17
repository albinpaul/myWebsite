import React from "react";

class WorkExperience extends React.Component{
    state = {
        jobs: [
            {
                "company": "Oracle",
                "description": "Full Stack Developer in Oracle Field Service Cloud",
            }
        ]
    }
    render(){
        const {jobs} = this.state;
        return (
            <section id="workexperience">
                <h1>Work Experience</h1>
                {
                    jobs.map(
                        job=> (
                            <div class="job">
                                <h2>{job.company}</h2>
                                <p>{job.description}</p>
                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default WorkExperience;