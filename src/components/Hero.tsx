

import React from "react";


const AboutSection: React.FC = () => (
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
          "url(/assets/images/background/main_bg1.webp) center/cover no-repeat",
        opacity: 1,
      }}
    ></div>

    {/* Transparent Overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "10420%",
        height: "100%",
        zInde2x: 1,
        background: "rgba(240,248,255,0.2)",
      }}
    ></div>

    <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
      <div className="row align-items-center">
        {/* Left Column: Text */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="banner-content ps-lg-5">
            <span className="banner-subtitle text-primary fw-bold">
              Welcome to Youth Becoming Engaged
            </span>

            <h1 className="banner-title fw-bold display-4 mt-2 mb-4">
              Community, Programs, and Engagement
            </h1>

          
            {/* Updated class to ensure pure black text */}
            <p className="banner-text text-black fw-bold mb-4 fs-5" style={{ color: '#000' }}>
              We partner with agencies, schools, and families to provide comprehensive case management and youth mentoring. Our focus is on health, learning, and community engagement to create lasting positive change. Explore our programs, connect with our team, and join us in empowering youth and transforming communities.
            </p>
              <div className="banner-buttons d-flex mb-4">
                <a
                  href="/contact"
                  className="btn btn-outline-primary btn-lg rounded-pill px-5"
                  style={{ marginBottom: 38 }}
                >
                  Connect With Us
                </a>
              </div>

           
          </div>
        </div>

        {/* You can add an optional right-side image here if needed */}
      </div>
    </div>
  </section>
);

export default AboutSection;