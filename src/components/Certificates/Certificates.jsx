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
                <h1 className="section__title">Certificates</h1>
                {
                    certificates.map(
                        certificate => (
                            <div className="certificate"> 
                                {certificate.title} <a href={certificate.link} target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default Certificates;