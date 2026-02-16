"use client";
import React, { useState } from "react";

const CommunityPartnerships = () => {
  const [activeTab, setActiveTab] = useState("tab-4");

  return (
    <section className="about-style-two pt_140">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-20.png)" }}
      ></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_three">
              <div className="content-box">
                <div className="sec-title mb_15">
                  <span className="sub-title mb_5">Community Partnerships</span>
                  <h2>
                    Empowering Youth Through <br />
                    Community Engagement
                  </h2>
                </div>

                <div className="text-box mb_30">
                  <p>
                    Youth Becoming Engaged, Inc. partners with community agencies,
                    schools, hospitals, law enforcement, social services, and
                    families to provide comprehensive case management and youth
                    mentoring. Our focus is on health, learning, and community
                    engagement to create lasting positive change.
                  </p>
                </div>

                <div className="tabs-box">
                  {/* TAB BUTTONS */}
                  <div className="tab-btns tab-buttons clearfix mb_30">
                    <div
                      className={`tab-btn ${activeTab === "tab-4" ? "active-btn" : ""}`}
                      onClick={() => setActiveTab("tab-4")}
                    >
                      Vision
                    </div>

                    <div
                      className={`tab-btn ${activeTab === "tab-5" ? "active-btn" : ""}`}
                      onClick={() => setActiveTab("tab-5")}
                    >
                      Mission
                    </div>

                    <div
                      className={`tab-btn ${activeTab === "tab-6" ? "active-btn" : ""}`}
                      onClick={() => setActiveTab("tab-6")}
                    >
                      Strategy
                    </div>
                  </div>

                  {/* TAB CONTENT */}
                  <div className="tabs-content">

                    {/* VISION */}
                    <div className={`tab ${activeTab === "tab-4" ? "active-tab" : ""}`} id="tab-4">
                      <div className="inner-box">
                        <p>
                          Our vision is to build a supportive network where every
                          young person has access to the resources, guidance, and
                          opportunities they need to thrive in their health,
                          education, and community life.
                        </p>

                        <div className="list-inner">
                          <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                              <div className="specialities-box">
                                <h4>Our Focus Areas</h4>
                                <ul className="list-style-one clearfix">
                                  <li>Health & Wellness</li>
                                  <li>Academic Support</li>
                                  <li>Community Engagement</li>
                                </ul>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                              <div className="specialities-box">
                                <h4>Our Vision</h4>
                                <ul className="list-style-one clearfix">
                                  <li>Empowered and engaged youth</li>
                                  <li>Strong community partnerships</li>
                                  <li>Equitable access to resources</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* MISSION */}
                    <div className={`tab ${activeTab === "tab-5" ? "active-tab" : ""}`} id="tab-5">
                      <div className="inner-box">
                        <p>
                          Our mission is to connect youth with caring mentors and
                          essential services, fostering growth, resilience, and
                          leadership through collaborative community partnerships.
                        </p>

                        <div className="list-inner">
                          <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                              <div className="specialities-box">
                                <h4>Our Programs</h4>
                                <ul className="list-style-one clearfix">
                                  <li>Mentoring & Guidance</li>
                                  <li>Case Management</li>
                                  <li>Family & Community Outreach</li>
                                </ul>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                              <div className="specialities-box">
                                <h4>Our Mission</h4>
                                <ul className="list-style-one clearfix">
                                  <li>Support youth development</li>
                                  <li>Promote healthy lifestyles</li>
                                  <li>Strengthen community ties</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* STRATEGY */}
                    <div className={`tab ${activeTab === "tab-6" ? "active-tab" : ""}`} id="tab-6">
                      <div className="inner-box">
                        <p>
                          We collaborate with local organizations and families to
                          deliver tailored programs, advocate for youth needs, and
                          create opportunities for engagement and success.
                        </p>

                        <div className="list-inner">
                          <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                              <div className="specialities-box">
                                <h4>Our Approach</h4>
                                <ul className="list-style-one clearfix">
                                  <li>Collaborative partnerships</li>
                                  <li>Individualized support</li>
                                  <li>Community-driven solutions</li>
                                </ul>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                              <div className="specialities-box">
                                <h4>Our Strategy</h4>
                                <ul className="list-style-one clearfix">
                                  <li>Engage stakeholders</li>
                                  <li>Empower youth voices</li>
                                  <li>Measure impact & outcomes</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box">
              <div
                className="image-shape"
                style={{ backgroundImage: "url(/assets/images/shape/shape-19.png)" }}
              ></div>
              <figure className="image">
                <img
                  src="/assets/images/resource/about-2.jpeg"
                  alt="Community Partnerships"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartnerships;
