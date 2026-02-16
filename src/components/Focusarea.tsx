"use client";

import Image from "next/image";
import React from "react";
import {
  FaBullhorn,
  FaBrain,
  FaUsers,
  FaWallet,
  FaUserTie,
  FaHeartbeat,
} from "react-icons/fa";

const focusAreas = [
  {
    title: "Community & Self-Advocacy",
    desc: "Supporting youth to understand their rights, voice and role in their community.",
    icon: <FaBullhorn size={40} />,
  },
  {
    title: "Mental Health & Emotional Well-Being",
    desc: "Promoting mental health awareness, emotional support and healthy coping skills.",
    icon: <FaBrain size={40} />,
  },
  {
    title: "Interdependence & Relationship Skills",
    desc: "Helping young people build healthy relationships and collaborative skills.",
    icon: <FaUsers size={40} />,
  },
  {
    title: "Entrepreneurship & Financial Literacy",
    desc: "Teaching financial responsibility, career readiness and entrepreneurial thinking.",
    icon: <FaWallet size={40} />,
  },
  {
    title: "Leadership Development",
    desc: "Building confidence, communication and leadership abilities.",
    icon: <FaUserTie size={40} />,
  },
  {
    title: "Harm Reduction & Health Education",
    desc: "Providing accurate, supportive and practical health and safety education.",
    icon: <FaHeartbeat size={40} />,
  },
];

const Focusarea: React.FC = () => (
  <section className="working-section sec-pad centred">
    <div
      className="pattern-layer"
      style={{
        backgroundImage: "url(/assets/images/shape/shape-8.png)",
      }}
    ></div>

    <div className="auto-container">
      <div className="sec-title mb_60">
        <span className="sub-title mb_5">
          Our Focus Areas (The “E” in ENGAGED)
        </span>
        <h2>
          Through our partnerships, we provide practical learning and open
          conversations that help young people remain engaged in their
          communities.
        </h2>
      </div>

      <div className="inner-container p_relative">
        <div
          className="row clearfix"
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "-15px",
            marginRight: "-15px",
          }}
        >
          {focusAreas.map((area, idx) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 working-block"
              key={idx}
              style={{
                display: "flex",
                padding: "15px",
                boxSizing: "border-box",
              }}
            >
              <div
                className="working-block-one"
                style={{
                  border: "2px solid #e0e0e0",
                  borderRadius: 16,
                  background: "#fff",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  minHeight: 360,
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(0,0,0,0.12)";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "#007bff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.03)";
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.borderColor = "#e0e0e0";
                }}
              >
                {/* ICON */}
                <div
                  className="icon-box"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 30,
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      border: "2px solid #007bff",
                      background: "#f8f9fa",
                      transition: "all 0.4s ease",
                      color: "#007bff",
                    }}
                  >
                    {area.icon}
                  </span>
                </div>

                {/* CONTENT */}
                <div
                  className="lower-content"
                  style={{
                    textAlign: "center",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 14,
                      minHeight: 50,
                    }}
                  >
                    {area.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 16,
                      color: "#555",
                      lineHeight: "1.7",
                      minHeight: 70,
                    }}
                  >
                    {area.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Focusarea;
