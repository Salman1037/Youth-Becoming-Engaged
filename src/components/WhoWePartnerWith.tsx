import React from "react";

const partnerCategories = [
  { iconClass: "fa-shield-alt", label: "Law Enforcement" },
  { iconClass: "fa-school", label: "Schools" },
  { iconClass: "fa-hospital", label: "Hospitals" },
  { iconClass: "fa-handshake", label: "Social Services" },
];

const WhoWePartnerWith: React.FC = () => (
  <section style={{ width: "100%", padding: "48px 0" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: 36 }}>Who We Partner With</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 32,
          justifyItems: "center",
        }}
      >
        {partnerCategories.map((cat) => (
          <div key={cat.label} style={{ textAlign: "center" }}>
            <i className={`fas ${cat.iconClass}`} style={{ fontSize: "2.5rem", marginBottom: 12, display: "block", color: "#294BCB" }} aria-hidden="true"></i>
            <div style={{ fontSize: "1.1rem", fontWeight: 500 }}>{cat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWePartnerWith;
