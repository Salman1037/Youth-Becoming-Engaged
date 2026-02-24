import React from "react";
import Link from "next/link";


const PartnershipsHero: React.FC = () => (
  <section className="page-title p_relative centred">
    <div
      className="bg-layer"
      style={{ backgroundImage: "url(/assets/images/background/about_bg.webp)" }}
    ></div>
    <figure className="image-layer">
      <img src="/assets/images/resource/about_tittle.webp" alt="" />
    </figure>
    <div className="auto-container">
      <div className="content-box">
        <h1>Community Partnerships</h1>
        <ul className="bread-crumb clearfix">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Partnerships</li>
        </ul>
      </div>
    </div>
  </section>
);

export default PartnershipsHero;
