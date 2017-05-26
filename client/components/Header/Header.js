import React, { Component } from 'react';
import Scroll from 'react-scroll';
import "./Header.css";

let Link = Scroll.Link; 
let scroll = Scroll.animateScroll;
class Header extends Component {
  render() {
    return (
      
        
          <nav
            id="navbar-site"
            className="navbar fixed-top navbar-inverse navbar-toggleable-sm"
          >
            <div className="container align-center">
              
              <a  className="header__brand"> </a>

              <div className="nav-links">
                <div className="">

                  <Link
                    className="nav-link-item"
                    activeClass="nav-link-item-active"
                    to="home"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}
                  >
                    Home
                  </Link>
                  <Link
                    className="nav-link-item"
                    activeClass="nav-link-item-active"
                    to="projects"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={50}
                    duration={500}
                    onSetActive={this.handleSetActive}
                  >
                    Projects
                    
                  </Link>
                  
                  <Link
                    className="nav-link-item"
                    activeClass=""
                    to="bio"
                    spy={true}
                    smooth="easeInOutQuint"
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}
                  >
                    Bio
                  </Link>
                 
                  <a alt="Resume Download" className="nav-link-item" href="http://www.dnecklesportfolio.com/DNeckles_Resume_May2017.doc">Resume</a>
                </div>

              </div>
            </div>
          </nav>
      
    );
  }
}

export default Header;
          