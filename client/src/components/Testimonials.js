import React, { Component } from 'react'

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <div className="testimonials__arrow">
          <i className="fas fa-caret-left testimonials__icon"/>
        </div>
        <div className="testimonials__content">
          <header className="testimonials__heading">Client <span>Testimonials</span></header>
          <h2 className="testimonials__client">Frankie Marie</h2>
          <div className="testimonials__quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <i className="fas fa-quote-right testimonials__icon--quote"/>
        </div>
        <div className="testimonials__arrow">
          <i className="fas fa-caret-right testimonials__icon" />
        </div>
      </div>
    );
  }
}

export default Testimonials;
