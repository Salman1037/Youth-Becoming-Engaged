"use client";
import React, { useRef, useEffect, useState } from "react";

const partnerCategories = [
  { iconClass: "fa-shield-alt", label: "Law Enforcement" },
  { iconClass: "fa-school", label: "Schools" },
  { iconClass: "fa-hospital", label: "Hospitals" },
  { iconClass: "fa-handshake", label: "Social Services" },
];

const WhoWePartnerWith: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ width: "100%", padding: "48px 0", background: "#fff" }}>
      <div
        ref={sectionRef}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 16px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: 36, color: "#20476D" }}>Who We Partner With</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 32,
            justifyItems: "center",
          }}
        >
          {partnerCategories.map((cat) => (
            <div
              key={cat.label}
              style={{
                textAlign: "center",
                border: "2px solid #EFA852",
                borderRadius: 16,
                boxShadow: "0 2px 12px rgba(239,168,82,0.08)",
                padding: "32px 16px",
                background: "linear-gradient(135deg, #fff 80%, #EFA852 100%)",
                transition: "box-shadow 0.2s, border-color 0.2s",
                cursor: "pointer",
                minHeight: 180,
                width: "100%",
                maxWidth: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className={`fas ${cat.iconClass}`}
                style={{
                  fontSize: "2.5rem",
                  marginBottom: 12,
                  display: "block",
                  color: "#20476D",
                  filter: "drop-shadow(0 2px 4px rgba(239,168,82,0.15))",
                }}
                aria-hidden="true"
              ></i>
              <div style={{ fontSize: "1.1rem", fontWeight: 500, color: "#EFA852" }}>{cat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWePartnerWith;
