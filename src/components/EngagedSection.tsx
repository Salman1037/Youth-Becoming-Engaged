import React from "react";
import { FaChalkboardTeacher, FaComments, FaBullhorn, FaHeartbeat, FaUsers, FaLightbulb, FaMoneyBillWave, FaUserTie } from "react-icons/fa";

const values = [

  { icon: <FaBullhorn />, label: "Self-advocacy" },
  { icon: <FaHeartbeat />, label: "Mental health" },
  { icon: <FaUsers />, label: "Interdependence" },
  { icon: <FaLightbulb />, label: "Entrepreneurship" },
  { icon: <FaMoneyBillWave />, label: "Financial literacy" },
  { icon: <FaUserTie />, label: "Leadership" }
];

const paragraph =
  "Youth practical learning and open conversations about community.\nWe empower youth to grow, share, and lead together.";

const imageUrl = "/assets/images/banner/engage_ represent.jpg";

const EngagedSection = () => (
  <section
    style={{
      padding: "80px 0",
      margin: "48px 0",
      boxShadow: "0 8px 32px rgba(26,54,93,0.08)",
      borderRadius: 24,
      position: "relative"
    }}
  >
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 32px",
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: 48,
        flexWrap: "wrap"
      }}
    >
      <div style={{ flex: 1, minWidth: 220, display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
        <img
          src={imageUrl}
          alt="Supportive youth community"
          style={{
            width: "100%",
            maxWidth: 440,
            minHeight: 320,
            borderRadius: 18,
            boxShadow: "0 4px 16px rgba(26,54,93,0.10)",
            objectFit: "cover"
          }}
        />
      </div>
      <div style={{ flex: 2, minWidth: 320, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: 800,
            marginBottom: 24,
            fontFamily: "Montserrat, Arial, sans-serif",
            letterSpacing: "-1px"
          }}
        >
          What ENGAGED Represents
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: 500,
            marginBottom: 28,
            fontFamily: "Montserrat, Arial, sans-serif",
            lineHeight: 1.5
          }}
        >
          {paragraph}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
          {values.map((v, idx) => (
            <li key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: "1.4rem", marginRight: 12, color: "#20476D" }}>{v.icon}</span>
              <span style={{ fontSize: "1rem", fontFamily: "Montserrat, Arial, sans-serif", fontWeight: 600 }}>{v.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default EngagedSection;
