// import React from "react";
// import Image from "next/image";
// const AboutSection: React.FC = () => (
//   <section className="page-title p_relative centred">
//     <div
//       className="bg-layer"
//       style={{ backgroundImage: "url(/assets/images/background/page-title.jpg)" }}
//     ></div>
//     <figure className="image-layer">
//       <Image
//         src="/assets/images/background/page-title-1.png"
//         alt="About Us Banner"
//         width={520}
//         height={320}
//         style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
//       />
//     </figure>
//     <div className="auto-container">
//       <div className="content-box">
//         <h1>About Us</h1>
//         <ul className="bread-crumb clearfix">
//           <li>
//               <a href="/">Home</a>
//           </li>
//           <li>About Us</li>
//         </ul>
//       </div>
//     </div>
//   </section>
// );
// export default AboutSection;

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
          "url(/assets/images/background/about_bg.jpg) center/cover no-repeat",
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
              About Youth Becoming Engaged
            </span>

            <h1 className="banner-title fw-bold display-4 mt-2 mb-4">
              Empowering Youth, Strengthening 
            </h1>

            <p className="banner-text text-bold mb-4 fs-5"style={{ color: '#000' }}>
              We partner with agencies, schools, and families to provide comprehensive case management and youth mentoring. Our focus is on health, learning, and community engagement to create lasting positive change. Explore our programs, connect with our team, and join us in empowering youth and transforming communities.
            </p>

            <div className="banner-buttons d-flex">
              <a
                href="/programs"
                className="btn btn-primary btn-lg rounded-pill me-3 px-5"
              >
                Our Focus Areas
              </a>
              <a
                href="/get-started"
                className="btn btn-outline-primary btn-lg rounded-pill px-5"
              >
                Our Vision
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