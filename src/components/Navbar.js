import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  componentDidMount() {
    const burger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const menuText = document.querySelector(".hamburger-text");

    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menu.classList.toggle("active");
      if (menuText.textContent === "menu") {
        menuText.innerHTML = "close";
      } else {
        menuText.innerHTML = "menu";
      }
      document.body.classList.toggle("lock-screen");
    });
  }

  render() {
    return (
      <nav className="menu" role="navigation" aria-label="main-navigation">
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
                <Link
                  className="footer__link"
                  to="mailto:yoan.hillion@hotmail.fr"
                >
                  yoan.hillion@hotmail.fr
                </Link>
              </p>
            </div>
            <div className="footer__inner--right">
              <p className="footer__social">
                <Link
                  className="footer__link"
                  to="https://www.linkedin.com/in/yoan-hillion-b94322a4"
                >
                  Linkedin
                </Link>
              </p>
              <p className="footer__social">
                <Link className="footer__link" to="https://twitter.com/Y0anH">
                  Twitter
                </Link>
              </p>
              <p className="footer__social">
                <Link className="footer__link" to="https://github.com/yoan972">
                  Github
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </nav>
    );
  }
};

export default Navbar;
