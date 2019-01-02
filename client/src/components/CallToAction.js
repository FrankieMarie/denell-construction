import React, { Component } from 'react';

class CallToAction extends Component {
  render() {
    return (
      <div className="cta">
        <h2 className="cta__heading cta__child">Ready to start your project?</h2>
        <p className="cta__text cta__child">Get a quote and start making your vision a reality.</p>
        <h3 className="cta__number cta__child"><i className="fas fa-phone"></i> (906) 875-3591</h3>
      </div>
    );
  }
}

export default CallToAction;
