import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__inner--left">
          <p className="footer__social">
            <a className="footer__link" href="mailto:yoan.hillion@hotmail.fr">
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
  );
};

export default Footer;
