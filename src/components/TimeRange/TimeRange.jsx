import { Component } from "react";

class TimeRange extends Component{

    render() {
        const startDate = this.props.startDate;
        const endDate = this.props.endDate;
        
        if(endDate){
            return <p>{startDate.toDateString()} - {endDate.toDateString()}</p>;
        }
        return <p>{startDate.toDateString()} - Present</p> ;
        
    }
}

export default TimeRange;