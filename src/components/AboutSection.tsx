import React from "react";
import Link from "next/link";

const AboutSection: React.FC = () => (
  <section className="page-title p_relative centred">
    <div
      className="bg-layer"
      style={{ backgroundImage: "url(/assets/images/background/page-title.jpg)" }}
    ></div>
    <figure className="image-layer">
      <img src="/assets/images/resource/page-title-1.png" alt="" />
    </figure>
    <div className="auto-container">
      <div className="content-box">
        <h1>About Us</h1>
        <ul className="bread-crumb clearfix">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
