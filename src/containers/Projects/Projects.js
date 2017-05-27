import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="row d-flex">
                  <div className="p-2 col-sm-12 col-md-5">
                   <h2 className="headline">Projects</h2>
                      <p>
                            Project descriptions and details will soon here.
                            <br />
                            For now to see the code samples, please visit the github account at the link below. Thanks for your patience.
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
                        <a
                            to="http://www.dnecklesportfolio.com/banners"
                            className="cta-button"
                            role="button"
                          >
                           Banner
                          </a>

               
                  </div>
                </div>
    );
  }
}

export default Projects;