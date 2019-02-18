import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="nav ul">
          <div className="nav__logo"/>
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                className="nav__link"
                to="about"
                spy={true}
                smooth={true}
                duration={800}
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="testimonials"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </li>
            <li className="nav__item">
              <a className="nav__link nav__link--projects" href="/projects">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <Link
          className="nav__link"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <div className="nav__arrow" />
        </Link>
      </div>
    );
  }
}

export default Navigation;
