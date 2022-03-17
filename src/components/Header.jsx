import React from "react";


class Header extends React.Component{
    render(){
        return (
        <header class="">
            <div class="">
              <div class="">
                <a href="/" class="">
                  <svg class="" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
                </a>
        
                <ul class="">
                  <li><a href="#" class="">Home</a></li>
                  <li><a href="#" class="">Work Experience</a></li>
                  <li><a href="#" class="">Projects</a></li>
                  <li><a href="#" class="">Certifications</a></li>
                  <li><a href="#" class="">About</a></li>
                  <li><a href="#" class="">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
                    </a>
                  </li>
                </ul>
        
           
              </div>
            </div>
          </header>
      );
    }
}

export default Header;