import React from "react";

import "./Banner.css";

const Banner = () => (
  <div className="main-banner digital-agency-banner">
    <div id="scroll-down">
      <span className="arrow-down"></span>
      <span id="scroll-title">Scroll down</span>
    </div>

    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="hero-content">
                <h1>Your story starts with us.</h1>
                <p>
                  Lorem ipsum suspendisse ultrices gravida. Risus commodo
                  viverra maecenas accumsan lacus vel facilisis. eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="banner-primary-btn">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="banner-social-buttons">
      <ul>
        <li>
          <a href="https://www.facebook.com/deadlyconnections/">
            <i className="icofont-facebook"></i>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/deadlyccajss">
            <i className="icofont-twitter"></i>
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/deadlyconnections/">
            <i className="icofont-instagram"></i>
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Banner;
