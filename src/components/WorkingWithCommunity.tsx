import React from "react";

interface WorkingWithCommunityProps {
  title?: string;
  description?: string;
  points?: string[];
  imageUrl?: string;
}

const defaultTitle = "Working With Our Community";
const defaultDescription =
  "We connect with young people, build supportive relationships, and provide education to help them stay engaged in their communities.";
const defaultPoints = [
  "Our approach to youth engagement",
  "Collaboration with community partners"
];
const defaultImageUrl = "/assets/images/banner/community-working.jpg"; // Local image for community section

const WorkingWithCommunity: React.FC<WorkingWithCommunityProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  points = defaultPoints,
  imageUrl = defaultImageUrl
}) => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #e3e9f3 0%, #f8fafc 100%)",
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
          gap: 48
        }}
      >
        <div style={{ flex: 2, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2
            style={{
              color: "#1a365d",
              fontSize: "3.2rem",
              fontWeight: 800,
              marginBottom: 32,
              fontFamily: "Montserrat, Arial, sans-serif",
              letterSpacing: "-1px"
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: "#222",
              fontSize: "1.7rem",
              fontWeight: 500,
              marginBottom: 40,
              fontFamily: "Montserrat, Arial, sans-serif",
              lineHeight: 1.5
            }}
          >
            {description}
          </p>
        </div>
        {imageUrl && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <img
              src={imageUrl}
              alt="Community Working"
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
        )}
      </div>
    </section>
  );
};

export default WorkingWithCommunity;
