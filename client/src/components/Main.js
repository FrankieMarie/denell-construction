import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { getAllTestimonials } from '../redux/actions/testimonials';

// components
import Header from './Header';
import About from './About';
import CallToAction from './CallToAction';
import Testimonials from './Testimonials';
import Footer from './Footer';

class Main extends Component {
  componentDidMount() {
    const { getAllTestimonials } = this.props;
    getAllTestimonials();
  }
  render() {
    const { allTestimonials } = this.props;
    return (
      <div>
        <Element name="header" className="element" >
          <Header />
        </Element>
        <Element name="about" className="element" >
          <About />
        </Element>
        <Element name="testimonials" className="element" >
          <Testimonials
            testimonials={allTestimonials}
          />
          <CallToAction />
        </Element>
        <Element name="contact" className="element" >
          <Footer />
        </Element>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allTestimonials: state.testimonials.testimonials,
  }
}

export default connect(mapStateToProps, { getAllTestimonials })(Main);
