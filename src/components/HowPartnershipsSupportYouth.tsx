import React from "react";

const supportOutcomes = [
  { iconClass: "fa-users", label: "Mentorship & Guidance" },
  { iconClass: "fa-graduation-cap", label: "Educational Support" },
  { iconClass: "fa-heart", label: "Health & Wellness" },
  { iconClass: "fa-hands-helping", label: "Community Engagement" },
];


const HowPartnershipsSupportYouth: React.FC = () => (
  <section
    style={{
      width: "100%",
      padding: "48px 0",
      background: "#f7f9fb"
    }}
  >
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 16px" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: 32 }}>How Our Partnerships Support Youth</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.7, textAlign: "center", marginBottom: 36 }}>
        Our partnerships connect youth with caring adults and organizations, fostering supportive relationships and providing access to educational opportunities. Together, we help young people build confidence, develop skills, and achieve their goals in a safe and encouraging environment.
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          maxWidth: 520,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {supportOutcomes.map((item) => (
          <li
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #e0e4ea",
              borderRadius: 10,
              padding: "16px 20px",
              background: "#fafdff",
              boxShadow: "0 2px 8px rgba(44, 62, 80, 0.04)",
              transition: "box-shadow 0.2s",
              minHeight: 64,
            }}
          >
            <i
              className={`fas ${item.iconClass}`}
              style={{
                fontSize: "1.5rem",
                marginRight: 18,
                display: "inline-block",
                color: "#294BCB",
                minWidth: 28,
                textAlign: "center",
              }}
              aria-hidden="true"
            ></i>
            <span style={{ fontSize: "1.08rem", fontWeight: 500 }}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowPartnershipsSupportYouth;
