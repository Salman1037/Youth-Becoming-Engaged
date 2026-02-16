"use client";
import React, { useRef, useEffect, useState } from "react";

export default function Whoweare() {
  return (
    <section className="about-section p_relative">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-8.png)" }}
      ></div>
      <div className="wave-layer">
        <div className="wave-1">
          <svg width="318" height="131" viewBox="0 0 318 131" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 69.0468L74.0685 69.0468L98.2276 40.7213L125.459 121L164.762 10L191.919 105.268L208.417 57.4162L233.167 87.0291L249.076 69.0468L308 69.0468"
              stroke="#BDBDBD"
              strokeOpacity="0.15"
              strokeWidth="20"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="wave-2">
          <svg width="318" height="131" viewBox="0 0 318 131" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 69.0468L74.0685 69.0468L98.2276 40.7213L125.459 121L164.762 10L191.919 105.268L208.417 57.4162L233.167 87.0291L249.076 69.0468L308 69.0468"
              stroke="#BDBDBD"
              strokeOpacity="0.15"
              strokeWidth="20"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="auto-container">
        <div className="upper-content mb_80">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-block-one">
                <div className="content-box">
                  <div className="sec-title mb_15">
                    <span className="sub-title mb_5">About the organization</span>
                    <h2>Empowering Youth, Strengthening Communities</h2>
                  </div>
                  <div className="text-box mb_30 pb_30">
                    <p>
                      Youth Becoming Engaged, Inc. is a dedicated case management and youth mentoring organization. Our mission is to support young people in achieving health, educational success, and meaningful community engagement. We collaborate with community agencies, schools, hospitals, law enforcement, social services, and families to empower youth, nurture positive relationships, and strengthen communities. Through personalized guidance and mentorship, we help youth overcome challenges, build confidence, and become active contributors to society.
                    </p>
                  </div>
                  <div className="inner-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="specialities-box">
                          <h4>Our Focus Areas</h4>
                          <ul className="list-style-one clearfix">
                            <li>Health & Wellness</li>
                            <li>Educational Success</li>
                            <li>Community Engagement</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="specialities-box">
                          <h4>Our Vision</h4>
                          <ul className="list-style-one clearfix">
                            <li>Empower youth to thrive</li>
                            <li>Build strong community partnerships</li>
                            <li>Foster lifelong learning and growth</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-block-one">
                <div className="image-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: "url(/assets/images/shape/shape-9.png)" }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{ backgroundImage: "url(/assets/images/shape/shape-10.png)" }}
                    ></div>
                  </div>
                  <figure className="image">
                    <img src="/assets/images/resource/about-1.jpeg" alt="" />
                  </figure>
                  <div className="text-box">
                    <div
                      className="image-shape"
                      style={{ backgroundImage: "url(/assets/images/shape/shape-7.png)" }}
                    ></div>
                    <h2>30</h2>
                    <span>Years of Service to Youth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="impact-section py-5">
  <div className="container">
    <h2 className="mb-4 text-center fw-bold">Our Impact</h2>
    <div className="row justify-content-center">
      <div className="col-md-3 col-sm-6 mb-4">
        <CounterCard title="Youth Trained" end={1200} color="#0d6efd" />
      </div>
      <div className="col-md-3 col-sm-6 mb-4">
        <CounterCard title="Community Projects" end={35} color="#6610f2" />
      </div>
      <div className="col-md-3 col-sm-6 mb-4">
        <CounterCard title="Mentors & Volunteers" end={80} color="#fd7e14" />
      </div>
      <div className="col-md-3 col-sm-6 mb-4">
        <CounterCard title="Partner Organizations" end={20} color="#20c997" />
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

// CounterCard component for animated numbers
function CounterCard({
  title,
  end,
  color = "#007bff",
}: {
  title: string;
  end: number;
  color?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(end / (duration / 16));
    const animate = () => {
      start += step;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(start);
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [hasAnimated, end]);

  return (
    <div className="card text-center h-100 shadow-sm" ref={ref}>
      <div className="card-body">
        <h3 className="card-title fw-bold">{title}</h3>
        <p
          className="card-text display-6 fw-bold"
          style={{ color, fontWeight: 700 }}
        >
          {count.toLocaleString()}
          {end >= 1000 ? "+" : ""}
        </p>
      </div>
    </div>
  );
}