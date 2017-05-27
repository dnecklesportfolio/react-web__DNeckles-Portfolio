import React from "react";
import Scroll from 'react-scroll';
import styled from 'styled-components';
import 'theme/globalStyles';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../../containers/Home/Home";
import Bio from "../../containers/Bio/Bio";
import Projects from "../../containers/Projects/Projects";

import { Container } from 'theme/Grid';
import AppStyle from './AppStyle';

// add div no need for fullbleed
const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;

const scrollSpy = Scroll.scrollSpy;

class App extends React.Component {
  render() {
    return (
      <div>
      <Header/>
        <div className="Frame">
          <span className="Frame__SideBars"> </span>
          <span className="Frame__TopBar"> </span>
        </div>
        <div>

          <section id="home">
            <div className="fullbleed">
              <Container>
                <Home/>
              </Container>
              </div>
          </section>

          <Element name="projects">
            <section id="projects">
              <div className="fullbleed">
                <div className="container">
                 <Projects/>
              </div>
            </div>
            </section>
          </Element>

          <Element name="bio">
            <section id="bio">
              <div className="fullbleed">
                 <Bio/>
              </div>
            </section>
          </Element>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
