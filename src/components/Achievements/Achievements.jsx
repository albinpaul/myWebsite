import React from "react";

class Achievements extends React.Component{
    state = {
        achievements: [
            {
                "description": "Stackoverflow(top 5% of users with python tag)",         
            }
        ]
    }
    render(){

        const {achievements} = this.state;
        return (
            <section id="achievements">
                <h1 className="container">Achievements</h1>
                {
                    achievements.map(
                        achievement => (
                            <div class="achievement">
                               <p> {achievement.description} </p>

                            </div>
                        ) 
                    )
                
                }
            </section>
        );
    }
};
export default Achievements;