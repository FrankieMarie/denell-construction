import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

class Footer extends Component {
  constructor (props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-1-of-3">
            <div className="footer__info">
              <ul className="footer__list">
                <li className="footer__item">
                  <i className="fas fa-map-marker-alt"/>
                  Crystal Falls, Michigan
                </li>
                <li className="footer__item">
                  <i className="fas fa-phone"></i>
                  (906) 875-3591
                </li>
                <li className="footer__item">
                  <i className="fas fa-envelope"/>
                  info@denellconstruction.com
                </li>
              </ul>
            </div>
          </div>

          <div className="col-1-of-3 bottom-nav">
            <div className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  Back to Top
                </li>
                <li className="footer__nav-item">
                  About
                </li>
                <li className="footer__nav-item">
                  Projects
                </li>
              </ul>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="footer__copyright">
              <p className="footer__copyright--text">
                <span style={{ display: 'block', paddingBottom: '1rem' }}>
                  <a className="footer__link" href="frankiemarie.com">Frankie Marie Dev & Design</a>
                </span>
                <span style={{ display: 'block', paddingBottom: '1rem' }}>
                  &copy; Darryl DeNell Construction, Inc.
                </span>
                <span style={{ display: 'block' }}>- Twenty Nineteen -</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
