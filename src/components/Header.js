import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/images/logoyh-white.svg";

class Header extends React.Component {
  handleClick = () => {
    this.props.toggleMenu();
  };

  render() {
    const { menuActive } = this.props;
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="LOGOYH_white" />
        </div>
        <div className="nav-icon">
          <div
            className={`hamburger hamburger--slider ${
              !menuActive ? "" : "is-active"
            }`}
            onClick={this.handleClick}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
              <p className="hamburger-text">{!menuActive ? "menu" : "close"}</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};
