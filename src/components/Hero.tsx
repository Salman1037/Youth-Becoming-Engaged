"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Youth Becoming Engaged Organization",
    text: "A case management and mentoring organization partnering with community leaders to support young people through education, health-focused learning, and positive engagement opportunities.",
    btns: [
      { label: "Learn About Our Programs", href: "/programs" },
      { label: "Get Involved", href: "/get-involved" },
    ],
    bannerImg: "/assets/images/banner/banner1.png",
    thumbs: [
      "/assets/images/banner/thumb-1.jpg",
      "/assets/images/banner/thumb-2.jpg",
      "/assets/images/banner/thumb-3.jpg",
      "/assets/images/banner/thumb-4.jpg",
    ],
    doctorsCount: "100K",
    doctorsLabel: "Community Members Impacted",
  },
  {
    title: "Empowering Youth Through Support",
    text: "We provide structured mentorship, educational resources, and meaningful opportunities that help young people succeed academically, emotionally, and socially within their communities.",
    btns: [
      { label: "Our Mission & Vision", href: "/mission" },
      { label: "Become a Volunteer", href: "/volunteer" },
    ],
    bannerImg: "/assets/images/banner/banner2.png",
    thumbs: [
      "/assets/images/banner/thumb-1.jpg",
      "/assets/images/banner/thumb-2.jpg",
      "/assets/images/banner/thumb-3.jpg",
      "/assets/images/banner/thumb-4.jpg",
    ],
    doctorsCount: "200+",
    doctorsLabel: "Mentors & Dedicated Staff",
  },
  {
    title: "Building Strong Youth Communities",
    text: "Together with trusted partners and families, we create supportive environments where young individuals can grow, develop leadership skills, and actively engage in community life.",
    btns: [
      { label: "Partner With Our Organization", href: "/partners" },
      { label: "Connect With Our Team", href: "/contact" },
    ],
    bannerImg: "/assets/images/banner/banner3.png",
    thumbs: [
      "/assets/images/banner/thumb-1.jpg",
      "/assets/images/banner/thumb-2.jpg",
      "/assets/images/banner/thumb-3.jpg",
      "/assets/images/banner/thumb-4.jpg",
    ],
    doctorsCount: "50+",
    doctorsLabel: "Community & Agency Partners",
  },
];


export default function Hero() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  return (
    <section className="banner-section p_relative">
      <Slider {...settings} className="banner-carousel">
        {slides.map((slide, idx) => (
          <div className="slide-item p_relative" key={idx}>
            <div className="pattern-layer">
              <div
                className="pattern-1"
                style={{
                  backgroundImage: "url(/assets/images/shape/shape-1.png)",
                }}
              ></div>
              <div
                className="pattern-2"
                style={{
                  backgroundImage: "url(/assets/images/shape/shape-2.png)",
                }}
              ></div>
            </div>
            <div className="shape-layer">
              <div
                className="shape-1 float-bob-y"
                style={{
                  backgroundImage: "url(/assets/images/shape/shape-3.png)",
                }}
              ></div>
              <div
                className="shape-2"
                style={{
                  backgroundImage: "url(/assets/images/shape/shape-4.png)",
                }}
              ></div>
              <div
                className="shape-3"
                style={{
                  backgroundImage: "url(/assets/images/shape/shape-5.png)",
                }}
              ></div>
              <div
                className="shape-4"
                style={{
                  backgroundImage: "url(/assets/images/shape/shape-6.png)",
                }}
              ></div>
            </div>
            <div className="auto-container">
              <div className="content-box p_relative d_block z_5">
                <span className="title-text p_relative d_block hero-fade-in">
                  {slide.title}
                </span>
                <p className="hero-fade-in" style={{ fontSize: 18, margin: "16px 0" }}>
                  {slide.text}
                </p>
                <div className="btn-box hero-fade-in" style={{ display: "flex", gap: 16 }}>
                  {slide.btns.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      className="theme-btn btn-two"
                      style={{
                        background: i === 0 ? "#007bff" : "#e83e8c",
                        color: "#fff",
                        padding: "10px 24px",
                        borderRadius: 6,
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      <span>{btn.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="image-box">
              <figure className="image hero-fade-in">
                <img
                  src={slide.bannerImg}
                  alt="Banner"
                  width={500}
                  height={500}
                  style={{ width: "auto", height: "auto" }}
                />
              </figure>
              {/* <div className="doctors-list hero-fade-in">
                <ul className="thumb-box clearfix">
                  {slide.thumbs.map((thumb, tIdx) => (
                    <li key={tIdx}>
                      <img
                        src={thumb}
                        alt={`Doctor thumbnail ${tIdx + 1}`}
                        width={60}
                        height={60}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </li>
                  ))}
                </ul>
                <h3>{slide.doctorsCount}</h3>
                <span>{slide.doctorsLabel}</span>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}