import React, { Component, useState, useEffect } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 3
    },
    768: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
};

const partners = [
  {
    company: "Equil Advisory Logo",
    fileName: "equil.png",
    link: "https://equiladvisory.com.au/"
  },
  {
    company: "King & Wood Mallesons Logo",
    fileName: "kwm.png",
    link: "https://www.kwm.com/en/au"
  },
  {
    company: "The Funding Network Logo",
    fileName: "tfn.png",
    link: "https://www.thefundingnetwork.com.au/"
  }
];

const Partner = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="partner-area ptb-30 bg-38d16a">
      <div className="container">
        <div className="section-title">
          <h3 className="sponsor-title">Our Sponsors</h3>
        </div>
        <div className="row">
          {display ? (
            <OwlCarousel
              className="partner-slides owl-carousel owl-theme"
              {...options}
            >
              {partners.map(partner => (
                <div className="col-lg-12">
                  <div className="partner-item">
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <a>
                        <img
                          src={require(`../../images/partner-image/${partner.fileName}`)}
                          alt={partner.company}
                          height="100px"
                        />
                        <img
                          src={require(`../../images/partner-image/${partner.fileName}`)}
                          alt={partner.company}
                          height="100px"
                        />
                      </a>
                    </a>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Partner;
