import React from "react";

const Footer = () => {

  const EMAIL = "info@deadlyconnections.org.au"

  return (
    <footer className="footer-area pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <p>
                We Acknowledge and pay respects to the First Nations People of Australia, the land in which we live and work. We recognise the strength,resilience and capacity of Aboriginal people and pay respects to Elders past, present and emerging.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Get in Touch</h3>

              <ul className="social-links">
                <li>
                  <a href="https://www.facebook.com/deadlyconnections/">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/deadlyccajss">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/deadlyconnections/">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>

              <ul className="footer-contact-info">
                <li>
                  <i className="icofont-phone"></i>
                  <span>Phone:</span>
                  <a href="#">+61 433 900 218</a>
                </li>

                <li>
                  <i className="icofont-email"></i>
                  <span>Email:</span>
                  <a href={`mailto:${EMAIL}?Subject=Website enquiry`}>{EMAIL}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <p className="copyright-area-text">Deadly Connections Community & Justice Services Incorporated © 2019 ABN 55 628 603 396</p>
            </div>

            <div className="col-lg-6 col-md-6 text-right">
              <p className="copyright-area-text">
                Website Design and Development by{" "}
                <a href="http://code.sydney/" target="_blank">
                  Code.Sydney
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={require("../../images/line-bg.png")}
        className="line-bg"
        alt="line-bg"
      />
      <div className="shape23">
        <img src={require("../../images/shapes/23.png")} alt="shape" />
      </div>
      <div className="shape24">
        <img src={require("../../images/shapes/24.png")} alt="shape" />
      </div>
      <div className="shape27">
        <img src={require("../../images/shapes/27.png")} alt="shape" />
      </div>
    </footer>
  );
};

export default Footer