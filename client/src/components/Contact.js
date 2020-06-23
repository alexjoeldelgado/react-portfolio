import React, { Component } from "react";
import $ from "jquery";
import M from "materialize-css";
import axios from "axios";

class Contact extends Component {
    componentDidMount(){
        $('#sendBtn').on("click", () => {
        const contact = {
          name: $('#name').val(),
          email: $('#email').val(),
          message: $('#textarea').val()
        };
        
        if (!contact.name || !contact.email || !contact.message) {
          return;
        };
    
        sendMessage(contact.name, contact.email, contact.message);
    
        M.toast({html: 'Thank You! You should expect a response soon!', classes: 'rounded white-text'});
    
        $('#name').val("");
        $('#email').val("");
        $('#textarea').val("");    
      });
    
      function sendMessage(name, email, message) {
        return axios.post("/api/messages", {
          name: name,
          email: email,
          message: message
        });
      }; 
    }
    
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="N/A transparent vov fade-in-up t-1">
                            <div className="card-content no-scroll">
                                <div className="card-title vov fade-in-up t-1">
                                    <h2>Send me a message!</h2>
                                </div>
                                <hr/>
                                <br/>
                                <br/>
                                <h5 className="white-text email">
                                    Email: <a href="mailto:alex@salazarsoftware.com" className="email white-text">alex@salazarsoftware.com</a>
                                </h5>
                                <br/>
                                <h5 className="white-text email">
                                    LinkedIn: <a className="waves-effect white-text" href="https://www.linkedin.com/in/alexanderdelgado1" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/alexanderdelgado1</a>
                                </h5>
                                <br/>
                                <h5 className="white-text email">
                                    Github: <a className="waves-effect white-text" href="https://github.com/alexjoeldelgado" target="_blank" rel="noopener noreferrer">https://github.com/alexjoeldelgado</a>
                                </h5>
                                {/* <div className="input-field vov fade-in-up t-2">
                                    <input id="name" type="text" className="validate white-text"/>
                                    <label htmlFor="name" className="active white-text">First and Last Name</label>
                                </div>
                                <div className="input-field vov fade-in-up t-2">
                                    <input id="email" type="email" className="validate white-text"/>
                                    <label htmlFor="email" className="active white-text">Email Address</label>
                                </div>
                                <div className="input-field vov fade-in-up t-2">
                                    <textarea id="textarea" type="text" className="materialize-textarea white-text"></textarea>
                                    <label htmlFor="textarea" className="active white-text">Message</label>
                                </div>
                                <br/>
                                <button id="sendBtn" className="btn waves-effect waves-light black-text white vov fade-in-up t-2" type="submit" name="action">Submit<i className="material-icons right">send</i></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;