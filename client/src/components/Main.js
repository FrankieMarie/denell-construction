import React, { Component } from 'react';
import { Element } from 'react-scroll';

// components
import Header from './Header';
import About from './About';
import CallToAction from './CallToAction';
import Testimonials from './Testimonials';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Element name="header" className="element" >
          <Header />
        </Element>
        <Element name="about" className="element" >
          <About />
        </Element>
        <Element name="testimonials" className="element" >
          <CallToAction />
          <Testimonials />
        </Element>
        <Element name="contact" className="element" >
          <Footer />
        </Element>
      </div>
    );
  }
}

export default Main;
