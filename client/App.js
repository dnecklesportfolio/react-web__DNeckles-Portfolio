import React from "react";
var Scroll  = require('react-scroll'); 
import HeaderStyles from './styles/Header.css';
import FooterStyles from './styles/Footer.css';
import HomeStyles from './styles/Home.css';
import ProjectsStyles from './styles/Projects.css';
import BioStyles from './styles/Bio.css';
import { SocialIcon } from 'react-social-icons';

let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;



class App extends React.Component {
  render() {
    return (
      <div>
     
        <div className="Frame">
         
            <span className="Frame__SideBars"> </span>
            <span className="Frame__TopBar"> </span>
         
          <nav
            id="navbar-site"
            className="navbar fixed-top navbar-inverse navbar-toggleable-sm"
          >
            <div className="container">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#myContent"
              aria-controls="myContent"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >

              <span className="navbar-toggler-icon" />
            </button>

            <a href="" className="navbar-brand header__brand"> </a>

            <div className="collapse navbar-collapse" id="myContent">
              <div className="navbar-nav ml-auto">
                
                 <Link
                  className="nav-item nav-link"
                  activeClass="active"
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
                  className="nav-item nav-link"
                  activeClass="active"
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
                  className="nav-item nav-link"
                  activeClass="active"
                  to="bio"
                  spy={true}
                   smooth="easeInOutQuint"
                  offset={50}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                 Bio
                </Link>
               
              </div>

            </div>
            </div>
          </nav>  
        </div>
        <div>
         
          <section id="home">
            <div className="fullbleed">
              <div className="container"> 
              <Element name="home">
               <div className="row home justify-content-end">
                <div className="col col-lg-5">
                      <p className="subtitle">Creative, Dependable,</p>
                      <p className="headline">Visionary</p>
                      <p className="featured">
                        I’m Dwayne Neckles a banner/front-end developer based in Brooklyn.
                        <br />
                        I’ve worked with agencies such as MRM, Craft/McAnn, FCB and for Brands like Disney, Virgin America & more.
                        <br />I'm available for hire.
                      </p>
                    
                      {/* End Featured */}
                      <Link className="cta-button">Learn More</Link>
                      </div>
                 </div>    
                 </Element>
              </div>
            </div>
          </section>
      
          <Element name="projects">
          <section id="projects">
            <div className="fullbleed">
              <div className="wrapper">
               
                      <p className="subtitle">projects</p>
                      <p className="headline">projects</p>
                      <p className="featured">
                        I’m Dwayne Neckles a front-end developer 3 years HTML Banner experience currently living in New York City.
                        <br />
                        I’ve had the privilege of working with agencies such as MRM, Craft/McAnn, FCB and for Brands like Disney, Virgin America & more.
                        <br /> <br />
                        I'm available for hire.
                      </p>
                      <button className="btn btn-primary">
                        Button should be red
                      </button>
                      {/* End Featured */}
                      <Link className="cta-button">Learn More</Link>
                    
              </div>
            </div>
          </section>
           </Element>

          <Element name="bio">
            <section id="bio">
              <div className="fullbleed">
                <div className="wrapper">
              
                        <p className="subtitle">about,</p>
                        <p className="headline">abloi</p>
                        <p className="featured">
                          I’m Dwayne Neckles a front-end developer 3 years HTML Banner experience currently living in New York City.
                          <br />
                          I’ve had the privilege of working with agencies such as MRM, Craft/McAnn, FCB and for Brands like Disney, Virgin America & more.
                          <br /> <br />
                          I'm available for hire.
                        </p>
                        <button className="btn btn-primary">
                          Button should be red
                        </button>
                        {/* End Featured */}
                        <Link className="cta-button">Learn More</Link>
                   
                </div>
              </div>
            </section>
          </Element>

        </div>
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-4">
                <p className="text-left">Portfolio of Dwayne Neckles</p>
                <p className="text-left">
                  Copyright © 2012-2017. All Rights Reserved.
                </p>
              </div>
              <div className="col-4">
                <div id="contactme">
                  <p>Let's discuss your next project?</p>
                  <p className="secondLine">
                    {" "}
                    917 607 5509
                    {" "}
                    <a href="info@dnecklesportfolio.com">
                      info@dnecklesportfolio.com
                    </a>
                  </p>
                </div>
              </div>
                <div className="col-4 text-right">
                  
                  <SocialIcon url="https://github.com/dnecklesportfolio"   color="#006BA8"  style={styles} />
                  <SocialIcon url="https://www.linkedin.com/in/dnecklesportfolio/"   color="#006BA8"  style={styles} />
                  <SocialIcon url="http://twitter.com/dneckles"   color="#006BA8"  style={styles} />
                </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const styles = {
  pointer: "cursor",
  marginLeft:20,
  height: 40,
  width: 40 
}
export default App;
 