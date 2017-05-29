import React from "react";
import Scroll from 'react-scroll';
import styled from 'styled-components';
import 'theme/globalStyles';

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Home from "containers/Home/Home";
import Bio from "containers/Bio/Bio";
import Projects from "containers/Projects/Projects";

const Element = Scroll.Element;
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

        <Element id="home" name="home">
          <Home/>
        </Element>

        <Element id="projects" name="projects">
          <Projects/>
        </Element>

        <Element id="bio" name="bio">
          <Bio/>
        </Element>

        <Footer/>
      </div>
    );
  }
}

export default App;
