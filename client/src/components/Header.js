import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navigation />
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              Darryl DeNell
              <div>Construction, Inc.</div>
            </span>
            <span className="heading-primary--sub">
              Building from the ground up across Michigans Upper Peninsula since 1995.
            </span>
          </h1>
          <div className="header__buttons">
            <Link to="/projects">
              <button className="header__btn btn-orange btn">
                View Projects
              </button>
            </Link>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={800}
            >
              <button className="header__btn btn-clear btn">
                Learn More <i className="fas fa-caret-down"></i>
              </button>
            </ScrollLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
