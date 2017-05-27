import React, { Component } from 'react';
import "./Bio.css"
class Bio extends Component {
  render() {
    return (
    <div className="container">
                  <div className="row d-flex">
        <div className="p-2 col-sm-12 col-md-8">
                      <div className="main">
                        <div className="main-text-container">
                          <h2 className="headline">Bio</h2>

                          <p>
                            Dwayne brings five years experience creating banners in HTML5 and Javascript, using Greensock Animation Library. He has ten years of consumer and pharmaceutical advertising industry. With his experience working with interactive banner ads, websites and conference panels, he is seeking mid-level, front-end development role using ReactJS.
                          </p><br />
                          <p>Highlights of his related skills include:</p>
                          <ul>
                            <li>Familiarity with Object Oriented JS </li>
                            <li>
                              Familiarity with ReactJS concepts, Github & Webpack
                            </li>
                            <li>
                              Experience taking a Photoshop design<br/>and coding it to HTML
                            </li>
                            <li>Can interact with marketing, developers, project managers and QA alike</li> 
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
    );
  }
}

export default Bio;