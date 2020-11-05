import React, { Component } from "react";
import M from "materialize-css";
import Projects from "./Projects";

class Portfolio extends Component {
    componentDidMount(){
        let carousel = document.querySelectorAll(".carousel");
        M.Carousel.init(carousel, {});
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="N/A transparent">
                            <div className="card-content no-scroll">
                                <div className="card-title">
                                    <h2>Some of my Projects</h2>
                                </div>
                                <hr />
                                <br />
                                <p className="center-align white-text">Swipe left or right</p>
                                <div id="portfolioContents" className="carousel">
                                    <Projects />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;