"use client";
import React, { useState } from "react";

const programData = [
  {
    id: "program-1",
    title: "Boxing & Conditioning",
    text: "Structured fitness activities that promote discipline, confidence and physical wellness.",
    videobg: "/assets/images/resource/boxing.jpeg",
    shape: "/assets/images/shape/shape-14.png",
    list: [
      "Promotes discipline",
      "Builds confidence",
      "Improves physical wellness",
      "Personalized coaching",
    ],
  },
  {
    id: "program-2",
    title: "Life Skills Training",
    text: "Practical education focused on decision‑making, communication, responsibility and personal growth.",
    videobg: "/assets/images/resource/skills.jpeg",
    shape: "/assets/images/shape/shape-14.png",
    list: [
      "Decision-making skills",
      "Effective communication",
      "Responsibility training",
      "Personal growth support",
    ],
  },
  {
    id: "program-3",
    title: "Trauma-Informed Coaching",
    text: "Supportive coaching approaches that recognize trauma and promote emotional safety and resilience.",
    videobg: "/assets/images/resource/coaching.jpeg",
    shape: "/assets/images/shape/shape-14.png",
    list: [
      "Recognizes trauma",
      "Promotes emotional safety",
      "Builds resilience",
      "Supportive environment",
    ],
  },
];

const Ourprogram: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState(programData[0].id);

  return (
    <section className="chooseus-section sec-pad p_relative">
      {/* Section shape background */}
      <div
        className="pattern-layer"
        style={{
          backgroundImage: "url(/assets/images/shape/shape-15.png)",
        }}
      ></div>
      <div className="auto-container">
        {/* Section heading */}
        <div className="sec-title centred mb_55">
          <span className="sub-title mb_5">Youth Becoming Engaged, Inc.</span>
          <h2>Our Programs</h2>
          <p>
            We provide case management and youth mentoring programs focused on health, learning, and community engagement. Our services are designed for community agencies, schools, hospitals, law enforcement, social services, and parents/guardians.
          </p>
        </div>
        {/* Program cards as tabs */}
        <div className="tabs-box">
          <div className="tab-btns tab-buttons clearfix centred mb_40" role="tablist">
            {programData.map((program) => (
              <button
                key={program.id}
                className={`tab-btn${activeProgram === program.id ? " active-btn" : ""}`}
                data-tab={`#${program.id}`}
                onClick={() => setActiveProgram(program.id)}
                role="tab"
                aria-selected={activeProgram === program.id}
                aria-controls={program.id}
                tabIndex={0}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  cursor: "pointer",
                }}
              >
                <h3>{program.title}</h3>
              </button>
            ))}
          </div>
          <div className="tabs-content" style={{ position: "relative", minHeight: "340px" }}>
            {programData.map((program) => (
              <div
                key={program.id}
                className={`tab-content-fade${activeProgram === program.id ? " active" : ""}`}
                id={program.id}
                role="tabpanel"
                aria-hidden={activeProgram !== program.id}
                style={{
                  display: activeProgram === program.id ? "block" : "none",
                }}
              >
                <div className="inner-box">
                  {/* Card shape background */}
                  <div
                    className="shape"
                    style={{
                      backgroundImage: `url(${program.shape})`,
                    }}
                  ></div>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                      <div
                        className="video-inner"
                        style={{
                          backgroundImage: `url(${program.videobg})`,
                        }}
                      >
                        {/* No video button or overlay */}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-block-two">
                        <div className="content-box ml_40">
                          <div className="text-box">
                            {/* Program heading */}
                            <h3>{program.title}</h3>
                            {/* Program description */}
                            <p>{program.text}</p>
                          </div>
                          {/* Program features list */}
                          <ul className="list-style-one clearfix">
                            {program.list.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourprogram;