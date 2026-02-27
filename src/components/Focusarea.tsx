"use client";

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
    title: "Mentoring",
    desc: "Guidance and support for youth to achieve their goals.",
    icon: <FaUserTie size={40} />,
  },
  {
    title: "Financial Literacy",
    desc: "Teaching youth about money management and smart financial choices.",
    icon: <FaWallet size={40} />,
  },
  {
    title: "Physical Fitness & Wellness",
    desc: "Encouraging healthy lifestyles through fitness and wellness activities.",
    icon: <FaHeartbeat size={40} />,
  },
  {
    title: "Culinary Education",
    desc: "Hands-on learning in cooking, nutrition, and healthy eating.",
    icon: <FaBrain size={40} />,
  },
  {
    title: "Anti Bullying Initiative",
    desc: "Promoting respect, safety, and positive relationships among youth.",
    icon: <FaBullhorn size={40} />,
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
      <div className=" mb_60 ">
        <h1 className=" mb_5 ">
        <b>  Our Services</b>
        </h1>
        <h2>
          We offer Mentoring, Financial Literacy, Physical Fitness & Wellness, Culinary Education, and an Anti Bullying Initiative to empower youth and support their growth.
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
                  e.currentTarget.style.borderColor = "#20476D";
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
                      border: "2px solid #20476D",
                      background: "#f8f9fa",
                      transition: "all 0.4s ease",
                      color: "#20476D",
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
