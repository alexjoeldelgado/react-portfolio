import React, { Component } from 'react';
import { Link } from "react-router-dom";
import M from "materialize-css";

class Header extends Component {
    componentDidMount(){
        let sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {});
    }
    render() {
        return (
            <div className="header">
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="images/vector.jpg" alt="sidenav-bg" />
                            </div>
                            <h4 className="white-text name">Alexander Delgado</h4>
                            <h4 className="name">Full Stack Web Developer using experience from a background in Hospitality to create User Friendly web applications</h4>
                            <a href="mailto:alex@salazarsoftware.com"><h4 className="white-text email">alex@salazarsoftware.com</h4></a>
                        </div>
                    </li>
                    <br/><br/><br/>
                    <li>
                        <Link className="waves-effect white-text" to="/">Home</Link>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <Link className="waves-effect white-text" to="/about">About</Link>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <Link className="waves-effect white-text" to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <Link className="waves-effect white-text" to="/resume">Resume</Link>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <Link className="waves-effect white-text" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <a className="waves-effect white-text" href="https://www.linkedin.com/in/alexanderdelgado1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <a className="waves-effect white-text" href="https://github.com/alexjoeldelgado" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </ul>
                <a href="#!" data-target="slide-out" className="sidenav-trigger hide-on-med-and-up left"><i className="medium white-text material-icons">reorder</i></a>
            </div>
        )
    }
}

export default Header;