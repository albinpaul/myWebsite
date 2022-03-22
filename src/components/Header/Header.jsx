import React from "react";
import './Header.css';
import logo from './logo.jpeg';
class Header extends React.Component{
    render(){
      console.log(this.props);
      return (
        <header class="header">
          <div class="">
            <a href="/" class="">
              <svg class="" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
            </a>
            <div class="header_items">
              {
                this.props.header.map(
                  section => <div className="header_item">
                    <a href = { "#" + section.id} class="">{section.label}</a>
                  </div>   
                )
              }
              <div>
                <img src={logo} alt="logo" width="32" height="42" class="rounded-circle"/>
              </div>
            </div>
          </div>
        </header>
      );
    }
}

export default Header;