import React, { Component } from "react";

class Resume extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="N/A transparent">
                            <div className="card-content no-scroll">
                                <div className="card-title">
                                    <h2>Resume</h2>
                                </div>
                                <hr/>
                                <iframe src="/images/Resume.pdf" width="100%" height="1000px" title="Resume" className="hide-on-small-only show-on-medium-and-up">
                                This browser does not support PDFs. Please download the PDF to view it: Download PDF
                                </iframe>
                                <div className="show-on-small white-text hide-on-med-and-up">
                                    <h2>Download my resume <a href="/images/Resume.pdf" target="_blank">here!</a></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;