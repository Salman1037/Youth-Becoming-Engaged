"use client";
import React, { useRef, useEffect, useState } from "react";

const supportOutcomes = [
  { iconClass: "fa-users", label: "Mentorship & Guidance" },
  { iconClass: "fa-graduation-cap", label: "Educational Support" },
  { iconClass: "fa-heart", label: "Health & Wellness" },
  { iconClass: "fa-hands-helping", label: "Community Engagement" },
];


const HowPartnershipsSupportYouth: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
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
    <section style={{ width: "100%", padding: "48px 0", background: "#f7f9fb" }}>
      <div
        ref={sectionRef}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "0 16px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: 32, color: "#294BCB" }}>How Our Partnerships Support Youth</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7, textAlign: "center", marginBottom: 36, color: "#222" }}>
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
          {supportOutcomes.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <li
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #EFA852",
                  borderRadius: 14,
                  padding: "20px 24px",
                  background: "linear-gradient(135deg, #fafdff 80%, #EFA852 100%)",
                  boxShadow: isHovered
                    ? "0 4px 16px rgba(239,168,82,0.18)"
                    : "0 2px 12px rgba(239,168,82,0.08)",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  minHeight: 80,
                  minWidth: 0,
                  width: "100%",
                  maxWidth: 260,
                  margin: "0 auto",
                  fontSize: "1.08rem",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                tabIndex={0}
                aria-label={item.label}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <i
                  className={`fas ${item.iconClass}`}
                  style={{
                    fontSize: "1.7rem",
                    marginRight: 18,
                    display: "inline-block",
                    color: "#294BCB",
                    minWidth: 32,
                    textAlign: "center",
                    filter: "drop-shadow(0 2px 4px rgba(239,168,82,0.15))",
                  }}
                  aria-hidden="true"
                ></i>
                <span style={{ color: "#EFA852", fontWeight: 600 }}>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HowPartnershipsSupportYouth;
