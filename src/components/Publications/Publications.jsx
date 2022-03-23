import React from "react";
import ijcsma from './resources/ijcsma.webp'

import './Publications.css';
class Publications extends React.Component{
    state = {
        publications: [
            {
                "title": "A Study on Different Music Genre Classification Methods",
                "link": "https://ijcsma.com/publications/february2018/V6I217.pdf",
                "imageSrc": ijcsma
            },
        ]
    }
    render(){
        const {publications} = this.state;
        return (
            <section id="publications">
                <h1 className="section__title">Publications</h1>
                {
                    publications.map(
                        publication => (
                            <div className="publication">
                                <a href={publication.link} target="_blank"><img className="publication_img" src={publication.imageSrc}/></a> 
                                {/* <i class="fa-solid fa-arrow-up-right-from-square"></i> */}
                               <h3> {publication.title} </h3> 
                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default Publications;