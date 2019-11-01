import React, { Component, useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
// eslint-disable-next-line
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1200: {
      items: 5
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
    fileName: "kwm.JPG",
    link: "https://www.kwm.com/en/au"
  },
  {
    company: "The Funding Network Logo",
    fileName: "tfn.jpg",
    link: "https://www.thefundingnetwork.com.au/"
  }
];

const Partner = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  console.log(partners);

  return (
    <div className="partner-area ptb-120 bg-38d16a">
      <div className="container">
        <div className="row">
          {display ? (
            <OwlCarousel className="partner-slides owl-carousel owl-theme">
              {partners.map(partner => (
                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href={partner.link}>
                      <a>
                        <img
                          src={require(`../../images/partner-image/${partner.fileName}`)}
                          alt={partner.company}
                        />
                        <img
                          src={require(`../../images/partner-image/${partner.fileName}`)}
                          alt={partner.company}
                        />
                      </a>
                    </Link>
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
