
// import React from "react";
// import Image from "next/image";

// const PartnershipsHero: React.FC = () => (
//   <section
//     className="banner-section pt-5 pb-5"
//     style={{ position: "relative", overflow: "hidden", background: "none" }}
//   >
   
//     <div
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 0,
//         background: "url(/assets/images/background/partnership_bg.webp) center/cover no-repeat",
//         opacity: 1,
//       }}
//     ></div>
  
//     <div
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 1,
//         background: "rgba(240,248,255,0.2)", // more transparent overlay
//       }}
//     ></div>
//     <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
//       <div className="row align-items-center">
//         <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
//           <div className="banner-content ps-lg-5">
//             <span className="banner-subtitle text-primary fw-bold">Youth Becoming Engaged</span>
//             <h1 className="banner-title fw-bold display-4 mt-2 mb-4">
//               Empowering Youth, <span className="text-primary">Transforming Communities</span>
//             </h1>
//             <p className="banner-text text-bold mb-4 fs-5">
//               We are dedicated to engaging young people in meaningful activities, leadership development, and community service. Our programs inspire growth, foster responsibility, and create positive social change.
//             </p>
//             <div className="banner-buttons d-flex">
//               <a href="/programs" className="btn btn-primary btn-lg rounded-pill me-3 px-5">Explore Programs</a>
//               <a href="/get-started" className="btn btn-outline-primary btn-lg rounded-pill px-5">Get Started</a>
//             </div>
//           </div>
//         </div>
       
//       </div>
//     </div>
//   </section>
// );

// export default PartnershipsHero;
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

            <p className="banner-text text-bold mb-4 fs-5">
              We are dedicated to engaging young people in meaningful activities, leadership development, and community service. Our programs are designed to provide structured mentorship, educational support, and safe spaces where youth can explore their potential, develop essential life skills, and build confidence. By connecting young people with caring mentors, supportive peers, and community resources, we help them overcome challenges, set personal goals, and take active roles in shaping their futures. Through teamwork, creative projects, and community initiatives, we aim to cultivate responsible, empathetic, and empowered youth who will drive positive change in their neighborhoods and beyond.
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