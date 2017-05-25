import React from "react";
var Scroll = require("react-scroll");
import HeaderStyles from "./styles/Header.css";
import FooterStyles from "./styles/Footer.css";
import HomeStyles from "./styles/Home.css";
import ProjectsStyles from "./styles/Projects.css";
import BioStyles from "./styles/Bio.css";
import { SocialIcon } from "react-social-icons";

import ProjectDisplay from "./components/ProjectDisplay/ProjectDisplay";
//import pic from "./styles/_img/Dwayne.png";

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

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

              <div className="pt-4 collapse navbar-collapse" id="myContent">
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
                    className="nav-item nav-link nav-disabled"
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
                      <p className="headline"> Visionary</p>
                      <p className="featured">
                        Dwayne Neckles is a banner/front-end developer based in Brooklyn. He has worked with agencies such as MRM, Craft/McAnn, FCB and for Brands like Disney, Virgin America & more.
                        <br />Now, he is available for hire as a front-end developer.
                      </p>

                      {/* End Featured */}
                      <Link
                        className="cta-button"
                        activeClass=""
                        to="projects"
                        spy={true}
                        role="button"
                        smooth="easeInOutQuint"
                        offset={50}
                        duration={500}
                        onSetActive={this.handleSetActive}
                      >
                        Learn More
                      </Link>

                    </div>

                  </div>
                </Element>
              </div>
            </div>
          </section>

          <Element name="projects">
            <section id="projects">
              <div className="fullbleed">

                <div className="container">

                 <div className="row d-flex">
                  <div className="p-2 col-sm-12 col-md-5">
                   

                      <h2 className="headline">Projects</h2>
                      <p>
                            Project descriptions and details will go here.
                            <br />
                            For now to see code samples, please visit the github account at the link below.
                            <br />
                            {" "}
                          </p>
                        
                          <a
                            to="https://github.com/dnecklesportfolio"
                            className="cta-button"
                            role="button"
                          >
                            Github
                          </a>
                       

               
                  </div>
                </div>
              </div>
 </div>
            </section>
          </Element>

          <Element name="bio">
            <section id="bio">
              <div className="fullbleed">
                <div className="container">
                  <div className="row d-flex">
                    <div className="p-2 col-sm-12 col-md-8">
                      <div className="main">
                        <div className="main-text-container">
                          <h2 className="headline">Bio</h2>

                          <p>
                            Dwayne brings five years experience creating banners in HTML5 and Javascript, using Greensock Animation Library. He has ten years of consumer and pharmaceutical advertising industry. With his experience working with interactive banner ads, websites and conference panels, he is seeking mid-level, front-end development role using ReactJS.
                          </p><br />
                          <p>He has:</p>
                          <ul>
                            <li>Familiarity with Object Oriented JS </li>
                            <li>
                              Familiarity with ReactJS concepts, Github & Webpack
                            </li>
                            <li>
                              Experience taking a Photoshop design<br/>and coding it to HTML
                            </li>
                            <li>Solid knowledge of GreenSock JS techniques</li> 
                            <li>
                              {" "}
                              Banner work recognized <br/>with Honorable Mentions and Awards at  Cannes Lions et al
                              {" "}
                            </li>
                          </ul>

                          <p>
                            Dwayne graduated from Polytechnic University with a <br/>Bachelors of Science in Information Management.
                          </p>
                        </div>
                      </div>
                     
                    </div>
                   <div className="p-2 col-sm-12 col-md-4">
                        <div className="sidebar">
                          <h3>Skills</h3>
                          <ul>
                            <li>Front End Dev</li>
                            <li>ReactJS</li>
                            <li>Interaction & Animation</li>
                            <li>Greensock JS</li>

                            <li>UX & Concepting</li>
                            <li>Photoshop, Sketch</li>
                            <li>Creative Direction</li>

                          </ul>
                         
                        </div>
                      </div>
                  </div>

                </div>
              </div>

            </section>
          </Element>

        </div>
        <footer>
          <div className="container">
            <div className="row d-flex justify-content-center">

              <div className="p-2 col-sm-8 col-md-4">
                <p className="text-center text-md-left">
                  Portfolio of Dwayne Neckles
                </p>
                <p className="text-center text-md-left">
                  Copyright © 2012-2017. All Rights Reserved.
                </p>
              </div>
              <div className="p-2 col-sm-8 col-md-4 justify-content-center flex-first flex-md-unordered">
                <div id="contactme">
                  <p className="text-center text-md-left">Contact</p>
                  <p className="text-center text-md-left">
                    {" "}
                    917.607.5509
                    &nbsp;
                    <a href="emailto:dwayneaneckles@gmail.com">
                      dwayneaneckles@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex-first flex-md-last first p-2 col-sm-8 col-md-4 text-center text-md-left">

                <SocialIcon
                  url="https://github.com/dnecklesportfolio"
                  color="#006BA8"
                  style={styles}
                />
                <SocialIcon
                  url="https://www.linkedin.com/in/dnecklesportfolio/"
                  color="#006BA8"
                  style={styles}
                />
                <SocialIcon
                  url="http://twitter.com/dneckles"
                  color="#006BA8"
                  style={styles}
                />
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
  marginLeft: 20,
  height: 40,
  width: 40
};
export default App;
