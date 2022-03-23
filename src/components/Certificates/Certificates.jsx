import React from "react";
import coursera from './resources/coursera.jpg';
import hackerrank from './resources/hackerrank.jpg';

import './certificate.css';
class Certificates extends React.Component{
    state = {
        certificates: [
            {
                "title": "Architecting with Google Compute Engine Specialization",
                "link": "https://www.coursera.org/account/accomplishments/specialization/certificate/YMLRMLP4V3RK",
                "imageSrc": coursera
            },
            {
                "title": "DeepLearning.AI TensorFlow Developer Specialization",
                "link": "https://www.coursera.org/account/accomplishments/specialization/certificate/C5EZ9FQGSNUS",
                "imageSrc": coursera
            },
            {
                "title": "Mathematics for Machine Learning: Multivariate Calculus",
                "link": "https://www.coursera.org/account/accomplishments/certificate/G5YBKFETN3Z6",
                "imageSrc": coursera
            },
            {
                "title": "Problem Solving (Advanced) Certificate",
                "link": "https://www.hackerrank.com/certificates/dea7febc729f",
                "imageSrc": hackerrank
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
                                <a href={certificate.link} target="_blank"><img className="certificate_img" src={certificate.imageSrc}/></a> 
                                {/* <i class="fa-solid fa-arrow-up-right-from-square"></i> */}
                                <h3>   {certificate.title} </h3>
                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default Certificates;