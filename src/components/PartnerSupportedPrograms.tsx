"use client";
import React from "react";

const programs = [
  {
    iconClass: "fa-dumbbell",
    title: "Boxing & Conditioning",
    desc: "Empowering youth through fitness and discipline."
  },
  {
    iconClass: "fa-lightbulb",
    title: "Life-Skills Training",
    desc: "Building confidence and practical skills for life."
  },
  {
    iconClass: "fa-hands-helping",
    title: "Trauma-Informed Coaching",
    desc: "Supporting healing and resilience in every youth."
  }
];

const PartnerSupportedPrograms: React.FC = () => (
  <section style={{ width: "100%", padding: "48px 0" }}>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 16px" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: 20 }}>Partner-Supported Programs</h2>
      <p style={{ textAlign: "center", fontSize: "1.08rem", marginBottom: 40 }}>
        Our partners help us deliver impactful programs that support youth development and well-being.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
          justifyItems: "center"
        }}
      >
        {programs.map((prog, idx) => (
          <div
            key={prog.title}
            style={{
              border: "1px solid #e0e4ea",
              borderRadius: 12,
              background: "#fff",
              boxShadow: "0 2px 8px rgba(44, 62, 80, 0.04)",
              padding: "32px 24px 28px 24px",
              textAlign: "center",
              height: 260,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              transition: "box-shadow 0.2s, border-color 0.2s, transform 0.2s",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(44, 62, 80, 0.10)";
              e.currentTarget.style.borderColor = "#EFA852";
              e.currentTarget.style.transform = "translateY(-4px) scale(1.025)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(44, 62, 80, 0.04)";
              e.currentTarget.style.borderColor = "#e0e4ea";
              e.currentTarget.style.transform = "none";
            }}
          >
            <i
              className={`fas ${prog.iconClass}`}
              style={{ fontSize: "2.2rem", marginBottom: 18, display: "block", color: "#20476D", transition: "color 0.2s" }}
              aria-hidden="true"
            ></i>
            <div style={{ fontSize: "1.18rem", fontWeight: 600, marginBottom: 10 }}>{prog.title}</div>
            <div style={{ fontSize: "1rem", lineHeight: 1.5, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{prog.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerSupportedPrograms;
