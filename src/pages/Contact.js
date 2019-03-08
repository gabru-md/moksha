import React, { Component } from "react";
import contacts from "../data/contacts";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div id="contacts-overlay">
        <div className="card-columns etc">
          {contacts.map(contact => (
            <div className="col-xs-2" key={contact.phone}>
              <div className="card card-image contact-card">
                <div
                  className="text-white d-flex py-5 px-4"
                  style={{ paddingTop: "0 !important" }}
                >
                  <div>
                    <span className="card-title pt-2">
                      <strong>{contact.name}</strong>
                      <br />
                      <span className="card-text">{contact.position}</span>
                      <br />
                      <span>{contact.phone}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Contact;
