import React from 'react'
import  logo  from '../assets/images/logoyh-white.svg'

const Header = class extends React.Component {

    render() {
        return (
            <header>
                <div className="logo">
                    <img src={ logo } alt="LOGOYH_white"/>
                </div>
                <div className="nav-icon">
                    <div className="hamburger hamburger--slider">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                            <p className="hamburger-text">menu</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header