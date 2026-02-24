import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection: React.FC = () => (
  <section className="page-title p_relative centred">
    <div
      className="bg-layer"
      style={{ backgroundImage: "url(/assets/images/background/about_bg.png)" }}
    ></div>
    <figure className="image-layer">
      <Image
        src="/assets/images/resource/about.png"
        alt=""
        width={300} // Adjust width as needed
        height={100} // Adjust height as needed
      />
    </figure>
    <div className="auto-container">
      <div className="content-box">
        <h1>About Us</h1>
        <ul className="bread-crumb clearfix">
          <li>
              <a href="/">Home</a>
          </li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
