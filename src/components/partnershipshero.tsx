
import React from "react";
import Image from "next/image";

const PartnershipsHero: React.FC = () => (
  <section className="page-title p_relative centred">
    <div
      className="bg-layer"
      style={{ backgroundImage: "url(/assets/images/background/partnership_bg.png)" }}
    ></div>
    <figure className="image-layer">
      <Image
        src="/assets/images/resource/partnership.png"
        alt=""
        width={300} // Adjust width as needed
        height={100} // Adjust height as needed
      />
    </figure>
    <div className="auto-container">
      <div className="content-box">
        <h1>Community Partnerships</h1>
        <ul className="bread-crumb clearfix">
          <li>
            <a href="/">Home</a>
          </li>
          <li>Partnerships</li>
        </ul>
      </div>
    </div>
  </section>
);

export default PartnershipsHero;
