import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="values">
        <header className="values__heading">
            Our <span>Values</span>
          </header>
          <div className="values__content">
            <div className="col-1-of-3 values__card">
              <i className="fas fa-hourglass-half values__card--icon"></i>
              <div>
                <h2 className="values__card--heading">Experience</h2>
              </div>
              <p className="values__card--text">Having 30+ years experience in the construction industry, Darryl built his business and his team with the ability to get the job done right.</p>
            </div>
            <div className="col-1-of-3 values__card">
              <i className="fas fa-crosshairs values__card--icon"></i>
              <div>
                <h2 className="values__card--heading">Percision</h2>
              </div>
              <p className="values__card--text">DeNell Construction does not cut corners. The small details are important to us and we treat every project as if it were our own.</p>
            </div>
            <div className="col-1-of-3 values__card">
              <i className="fas fa-handshake values__card--icon"></i>
              <div>
                <h2 className="values__card--heading">Reliability</h2>
              </div>
              <p className="values__card--text">We are commited to building quality products and realtionships with our clients. We will be the team you choose for projects in years to come.</p>
            </div>
          </div>
          </div>
        <div className="services">
          <header className="services__heading">
            Our <span>Services</span>
          </header>
          <div className="services__group">
            <div className="col-1-of-3 services__card">
              <i className="fas fa-home services__card--icon"></i>
              <h2 className="services__card--heading">Residential</h2>
              <p className="services__card--text">Darryl DeNell and his teams exceptional personal service has earned the trust of discerning homeowners.</p>
            </div>
            <div className="col-1-of-3 services__card">
              <i className="fas fa-hotel services__card--icon"></i>
              <h2 className="services__card--heading">Commercial</h2>
              <p className="services__card--text">DeNell Construction has the experience and expertise to get the job done on time and on budget.</p>
            </div>
            <div className="col-1-of-3 services__card">
              <i className="fas fa-wrench services__card--icon"></i>
              <h2 className="services__card--heading">Renovations</h2>
              <p className="services__card--text">DeNell Construction tackles challenging projects with a proven track record of creative problem solving.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
