import React from "react";

class WorkExperience extends React.Component{
    state = {
        jobs: [
            {
                "company": "Oracle",
                "title": "Full Stack Developer",
                "description": 
                [ 
                    "Worked as SRE during Ukraine Crisis.",
                    "Migrated 2 backend PHP scripts to Java micro-services.",
                    "Worked on SRE and Frontend Teams in OFSC.", 
                    "Reduced the memory usage of a microservice by 14GB and fixed memory leak of a\
                    C++ microservice .",
                    "Capacity analysis like RAM and No of replicas of stats-provider\
                    microservice by simulation in Python.", 
                    "Maintenance of the microservices and background scripts in the Statistics team."
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