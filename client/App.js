import React from "react";
import Scroll from 'react-scroll';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./containers/Home/Home"
import Bio from "./containers/Bio/Bio"
import Projects from "./containers/Projects/Projects"

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;

let scrollSpy = Scroll.scrollSpy;

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="Frame">
          <span className="Frame__SideBars"> </span>
          <span className="Frame__TopBar"> </span>
          <Header/>
        </div>
        <div>

          <section id="home">
            <div className="fullbleed">
              <div className="container">
                <Home/>
              </div>
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
