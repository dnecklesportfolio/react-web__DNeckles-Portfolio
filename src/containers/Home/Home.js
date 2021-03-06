import React, { Component } from "react";
import Scroll from "react-scroll";
import styled from "styled-components";
import { Container } from "theme/Grid";
import "./Home.css";

let Link = Scroll.Link;
let scroll = Scroll.animateScroll;
let Element = Scroll.Element;

export const FullWidthBg = styled.div`
     width: 100%;
     height: 100vh;
     background-size: cover;
     background-repeat: no-repeat;
     margin: 0;
     padding: 0;
     background-image: url('src/assets/_img/bg_featured_med.jpg');
     min-height: 800px;
`;

class Home extends Component {
  render() {
    return (
      <FullWidthBg>
        <Container>

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

        </Container>
      </FullWidthBg>
    );
  }
}

export default Home;
