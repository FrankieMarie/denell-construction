import React, { Component } from 'react'
import _ from 'lodash';

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({ activeIndex: index });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { testimonials } = this.props;
    let testimonialsLength = testimonials.length;

    if (index < 1) {
      index = testimonialsLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { testimonials } = this.props;
    let testimonialsLength = testimonials.length - 1;

    if (index === testimonialsLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    const { testimonials } = this.props;
    return (
      <div className="testimonials carousel-container">
        <header className="testimonials__heading">Client <span>Testimonials</span></header>
        <ul className="carousel__slides">
          {
            !_.isEmpty(testimonials) &&
            testimonials.map((testimonial, index) => {
              return (
                <div key={testimonial.id}>
                  <li
                    className={
                      index === this.state.activeIndex
                        ? "carousel__slide carousel__slide--active"
                        : "carousel__slide"
                    }
                  >
                    <i
                      onClick={(e) => this.goToPrevSlide(e)}
                      className="fas fa-caret-left testimonials__icon"
                    />
                    <div className="testimonials__content">
                      <h2 className="testimonials__client carousel-slide__author">{testimonial.author}</h2>
                      <div className="testimonials__quote carousel-slide__content">
                        {testimonial.body}
                      </div>
                      <i
                        className="fas fa-quote-right testimonials__icon--quote"
                      />
                    </div>
                    <i
                      onClick={(e) => this.goToNextSlide(e)}
                      className="fas fa-caret-right testimonials__icon"
                    />
                  </li>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Testimonials;
