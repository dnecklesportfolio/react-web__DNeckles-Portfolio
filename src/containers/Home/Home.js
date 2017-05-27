import React, { Component } from 'react';
import Scroll from 'react-scroll';
import "./Home.css";
let Link = Scroll.Link; 
let scroll = Scroll.animateScroll;
let Element = Scroll.Element;

class Home extends Component {
  render() {
    return (
      
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
    
    );
  }
}

export default Home;
