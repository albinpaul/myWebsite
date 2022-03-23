import { Component } from "react";
import './Tag.css';

class Tag extends Component{
    render(){
        return (<div className="tag">
            {this.props.tagName}        
        </div>)
    }
}

export default Tag;