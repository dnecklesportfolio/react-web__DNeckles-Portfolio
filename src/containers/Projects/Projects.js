import React, { Component } from 'react';
import styled from "styled-components";
import { Container } from "theme/Grid";
import './Projects.css';


class Projects extends Component {
  render() {
    return (

      <FullWidthBg>
      <Container> 
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
                    </Container>
                </FullWidthBg>
    );
  }
}

export const FullWidthBg = styled.div`
     width: 100%;
     height: 100vh;
     margin: 0;
     padding: 0;
     min-height: 800px;
    height: 682px;
    background: #909b9e;
    background: -moz-radial-gradient(center, ellipse cover, #909b9e 0%, #5d686b 100%);
    background: -webkit-radial-gradient(center, ellipse cover, #909b9e 0%, #5d686b 100%);
    background: radial-gradient(ellipse at center, #909b9e 0%, #5d686b 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#636a6c', endColorstr='#5d686b', GradientType=1);
   
`;

export default Projects;