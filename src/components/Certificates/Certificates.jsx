import React from "react";

class Certificates extends React.Component{
    state = {
        certificates: [
            {
                "title": "Architecting with Google Compute Engine Specialization",
                "link": "https://www.coursera.org/account/accomplishments/specialization/certificate/YMLRMLP4V3RK",
                
            },
            {
                "title": "DeepLearning.AI TensorFlow Developer Specialization",
                "link": "https://www.coursera.org/account/accomplishments/specialization/certificate/C5EZ9FQGSNUS",
            }
        ]
    }
    render(){
        const {certificates} = this.state;
        return (
            <section id="certificates">
                <h1>Certificates</h1>
                {
                    certificates.map(
                        certificate => (
                            <div class="certificate">
                                <a href={certificate.link}>{certificate.title}</a>
                               
                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default Certificates;