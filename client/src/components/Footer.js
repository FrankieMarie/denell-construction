import React, { Component } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';

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
          <div className="col-1-of-3 info">
            <div className="footer__info">
              <ul className="footer__list">
                <li className="footer__item">
                  <i className="fab fa-facebook-f"></i>
                  <a className="footer__link" href="https://www.facebook.com/darryl.denell">Facebook Page</a>
                </li>
                <li className="footer__item">
                  <i className="fas fa-map-marker-alt"/>
                  Crystal Falls, Michigan
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
                <li
                  className="footer__nav-item"
                  onClick={this.scrollToTop}
                >
                  Back to Top
                </li>
                <Link
                  className="footer__nav-item"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
                <NavLink
                  to="/projects"
                  className="footer__nav-item"
                >
                  Projects
                </NavLink>
              </ul>
            </div>
          </div>

          <div className="col-1-of-3 copy">
            <div className="footer__copyright">
              <p className="footer__copyright--text">
                <span style={{ display: 'block', paddingBottom: '1rem' }}>
                  <a className="footer__link" href="http://frankiemarie.com">Frankie Marie Dev & Design</a>
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
