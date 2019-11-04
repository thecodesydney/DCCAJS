import React, { Component } from "react";

import "./Contact.css";

const EMAIL = "info@deadlyconnections.org.au";
export class Contact extends Component {
  render() {
    return (
      <section className="contact-cta-area ptb-120">
        <div className="container">
          <div className="contact-cta-content">
            <div className="section-title">
              <span>Get in Touch</span>
              <h2>We're here to help</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <a
              className="contact-btn"
              href={`mailto:${EMAIL}?Subject=Website enquiry`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
