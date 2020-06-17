import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="N/A transparent vov fade-in-up t-1">
                            <div className="card-content no-scroll vov fade-in-up t-1">
                                <div className="card-title vov fade-in-up t-1">
                                    <h2>Get to know me</h2>
                                </div>
                                <hr/>
                                <img src="/images/profile.JPG" className="responsive-img left vov fade-in-up t-2" id="profilePic" alt="profile"/>
                                <p className="flow-text white-text vov fade-in-up t-2">
                                My name is <b>Alexander Delgado</b> and I am a <b>Full Stack Web Developer</b> utilizing experience from a background in Hospitality to create User Friendly web applications. Recently graduated with a certificate in Full Stack Development from the University of Central Florida, with newly acquired skills in JavaScript, CSS, Node.js, jQuery, React, MongoDB, and mobile-first web design. I am quite passionate when it comes to problem-solving and learning as much as I can within web development. Collaboration and Professionalism are two key skills I value in my work ethic. My motivation is driven by the quote from Gandhi, <b>“Be the change you wish to see in the world.”</b> I am looking forward to sharing my skills as a part of a results-driven team to produce efficient and stylized web solutions.
                                </p>
                                <br/>
                                <p className="flow-text white-text vov fade-in-up t-2">
                                I first started coding back in Middle School about 16 years ago. I was a part of the Web Team, a group of students responsible for initializing and maintaining the school's website. Back then, it was mainly basic html and very small facets of CSS. When Myspace was popular, I taught myself how to fully customize my webpage. 
                                </p>
                                <br/>
                                <p className="flow-text white-text vov fade-in-up t-2">
                                Now for more information about me. I was born in North Hollywood, CA and moved to the Orlando area back in 1997. My mother is Colombian and my father is Mexican, so that makes me a 1st generation American. Spanish was my first language and I learned English in school. I learned French in High School, then Portuguese and Italian in college. I consider myself fluent in English and Spanish, conversationally fluent in French and Portuguese, but I am still struggling with Italian. 
                                </p>
                                <br/>
                                <p className="flow-text white-text vov fade-in-up t-2"> 
                                I love to play video games, especially adventure and role playing games. My favorite game series would be The Legend of Zelda series, Tals of series, and the Pokemon series. I also enjoy playing sandbox games, such as Rollercoaster Tycoon, and real time strategy games, such as Command and Conquer. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;