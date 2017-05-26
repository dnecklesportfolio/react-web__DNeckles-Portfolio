import React, { Component } from 'react';
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  render() {
    return (
      
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
    
    );
  }
}
export default Footer;

const styles = {
  pointer: "cursor",
  marginLeft: 20,
  height: 40,
  width: 40
};