
import React from "react";
import Image from "next/image";

const PartnershipsHero: React.FC = () => (
  <section
    className="banner-section pt-5 pb-5"
    style={{ position: "relative", overflow: "hidden", background: "none" }}
  >
    {/* Background Image */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        background:
          "url(/assets/images/background/partnership_bg.webp) center/cover no-repeat",
        opacity: 1,
      }}
    ></div>

    {/* Transparent Overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        background: "rgba(240,248,255,0.2)",
      }}
    ></div>

    <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
      <div className="row align-items-center">
        {/* Left Column: Text */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="banner-content ps-lg-5">
            <span className="banner-subtitle text-primary fw-bold">
              Youth Becoming Engaged
            </span>

            <h1 className="banner-title fw-bold display-4 mt-2 mb-4">
              Empowering Youth, <span className="text-primary">Transforming Communities</span>
            </h1>

            <p className="banner-text text-bold mb-4 fs-5"style={{ color: '#000' }}>
           Empowering the next generation through action and mentorship.
We provide the safe spaces, leadership tools, and community connections young people need to thrive. From creative projects to professional guidance, we’re here to help youth build confidence, overcome challenges, and drive real change in their neighborhoods.
            </p>

            <div className="banner-buttons d-flex">
              <a
                href="/programs"
                className="btn btn-primary btn-lg rounded-pill me-3 px-5"
              >
                Explore Programs
              </a>
              <a
                href="/get-started"
                className="btn btn-outline-primary btn-lg rounded-pill px-5"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* You can add an optional right-side image here if needed */}
      </div>
    </div>
  </section>
);

export default PartnershipsHero;