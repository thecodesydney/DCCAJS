import React from "react";

import "./Team.css";

// Todo: Refactor Team component to use EventCard to DRY up code
const EventCard = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="single-team">
        <div className="team-image">
          <img
            src={require("../../images/team-image/1.jpg")}
            className="member-img"
            alt="team"
          />
          <img
            src={require("../../images/team-image/team-back.jpg")}
            className="back-image"
            alt="back-image"
          />
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icofont-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="event-content">
            <h3>Some Event</h3>
            <span>Sep 2019</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => (
  <section className="team-area bg-image ptb-120">
    <div className="container">
      <div className="section-title">
        <span>Our Events</span>
        <h2>Reach out and relate</h2>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-team">
            <div className="team-image">
              <img
                src={require("../../images/team-image/1.jpg")}
                className="member-img"
                alt="team"
              />
              <img
                src={require("../../images/team-image/team-back.jpg")}
                className="back-image"
                alt="back-image"
              />
              <ul className="social-links social-icons">
                <li>
                  <a href="#">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="event-content">
              <h3>Some Event</h3>
              <span>Sep 2019</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-team">
            <div className="team-image">
              <img
                src={require("../../images/team-image/2.jpg")}
                className="member-img"
                alt="team"
              />
              <img
                src={require("../../images/team-image/team-back.jpg")}
                className="back-image"
                alt="back-image"
              />
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="event-content">
              <h3>Some Event</h3>
              <span>Oct 2019</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-team">
            <div className="team-image">
              <img
                src={require("../../images/team-image/3.jpg")}
                className="member-img"
                alt="team"
              />
              <img
                src={require("../../images/team-image/team-back.jpg")}
                className="back-image"
                alt="back-image"
              />
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="event-content">
              <h3>Some Event</h3>
              <span>Coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
