import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prefer-stateless-function
const Navbar = class extends React.Component {
  render() {
    const { menuActive } = this.props;
    if (menuActive) {
      // eslint-disable-next-line no-undef
      document.body.classList.add("lock-screen");
    }
    if (!menuActive) {
      // eslint-disable-next-line no-undef
      document.body.classList.remove("lock-screen");
    }
    return (
      <nav
        className={`menu ${!menuActive ? "" : "active"}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="menu__inner">
          <ul>
            <li className="menu__item">
              <Link className="menu__link" to="/">
                Works
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/about">
                About
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <footer className="footer--menu">
          <div className="footer">
            <div className="footer__inner--left">
              <p className="footer__social">
                <a
                  className="footer__link"
                  href="mailto:yoan.hillion@hotmail.fr"
                >
                  yoan.hillion@hotmail.fr
                </a>
              </p>
            </div>
            <div className="footer__inner--right">
              <p className="footer__social">
                <a
                  className="footer__link"
                  href="https://www.linkedin.com/in/yoan-hillion-b94322a4"
                >
                  Linkedin
                </a>
              </p>
              <p className="footer__social">
                <a className="footer__link" href="https://twitter.com/Y0anH">
                  Twitter
                </a>
              </p>
              <p className="footer__social">
                <a className="footer__link" href="https://github.com/yoan972">
                  Github
                </a>
              </p>
            </div>
          </div>
        </footer>
      </nav>
    );
  }
};

export default Navbar;

Navbar.propTypes = {
  menuActive: PropTypes.bool.isRequired
};
