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
                        <div className="N/A transparent vov fade-in-up t-1">
                            <div className="card-content no-scroll">
                                <div className="card-title vov fade-in-up t-1">
                                    <h2>Some of my Projects</h2>
                                </div>
                                <hr />
                                <br />
                                <p className="center-align white-text vov fade-in-up t-2">Swipe left or right</p>
                                <div id="portfolioContents" className="carousel vov fade-in-up t-2">
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