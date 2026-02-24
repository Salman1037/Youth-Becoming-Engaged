"use client";
import React from "react";
const mainImgPath = "/assets/images/banner/engage_represent.jpg";

const highlights = [
  { text: "Free transportation to programs" },
  { text: "Improved school attendance" },
  { text: "Expanded access to community resources" },
];

const ImprovingAccessThroughPartnerships: React.FC = () => (
  <section style={{ width: "100%", padding: "48px 0" }}>
    <div style={{
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 16px",
      display: "flex",
      flexWrap: "wrap",
      gap: 48,
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* Left column: Large supportive image */}
      <div style={{ flex: "1 1 320px", minWidth: 260, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={mainImgPath} alt="Supportive" style={{ width: 120, height: 120, opacity: 0.15 }} />
      </div>
      {/* Right column: Text and highlights */}
      <div style={{ flex: "2 1 400px", minWidth: 280, maxWidth: 520 }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20 }}>Improving Access Through Partnerships</h2>
        <p style={{ fontSize: "1.08rem", marginBottom: 28 }}>
          Our partnerships help remove barriers to participation by providing transportation support, making it easier for youth to attend programs and improve their school attendance.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {highlights.map((item) => (
            <li key={item.text} style={{ display: "flex", alignItems: "center", marginBottom: 16, fontWeight: 500 }}>
              <img src={mainImgPath} alt="" style={{ width: 32, height: 32, marginRight: 14, opacity: 0.7 }} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ImprovingAccessThroughPartnerships;
