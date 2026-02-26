"use client";
import React, { useRef, useEffect, useState } from "react";

const CommunityPartnershipsIntro: React.FC = () => {
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
    <section style={{ width: "100%", padding: "60px 0" }}>
      <div
        ref={sectionRef}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          padding: "0 16px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 24 }}>Our Community Partnerships</h1>
        <p style={{ fontSize: "1.15rem", lineHeight: 1.7, margin: 0 }}>
          Youth Becoming Engaged, Inc. works alongside community agencies—including law enforcement, schools, hospitals, and social services—to support and empower youth. Through these partnerships, we provide comprehensive resources and guidance to help young people thrive.
        </p>
      </div>
    </section>
  );
};

export default CommunityPartnershipsIntro;
