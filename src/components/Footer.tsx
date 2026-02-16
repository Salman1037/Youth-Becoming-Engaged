import React from "react";

const Footer = () => (
  <footer className="main-footer">
    <div className="widget-section p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(/assets/images/shape/shape-21.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(/assets/images/shape/shape-22.png)' }}></div>
        <div className="pattern-3" style={{ backgroundImage: 'url(/assets/images/shape/shape-23.png)' }}></div>
        <div className="pattern-4" style={{ backgroundImage: 'url(/assets/images/shape/shape-24.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget about-widget">
              <div className="widget-title">
                <h3>About Us</h3>
              </div>
              <div className="widget-content">
                <p>To provide accessible and equitable healthcare for all individuals, regardless of their or socioeconomic status.</p>
                <ul className="social-links clearfix">
                  <li><a href="/index.html"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="/index.html"><i className="fab fa-dribbble"></i></a></li>
                  <li><a href="/index.html"><i className="fab fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml_70">
              <div className="widget-title">
                <h3>Links</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li><a href="/about.html">About</a></li>
                  <li><a href="/index.html">Surgery</a></li>
                  <li><a href="/index.html">Medications</a></li>
                  <li><a href="/index.html">Chemotherapy</a></li>
                  <li><a href="/index.html">Physical therapy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml_70">
              <div className="widget-title">
                <h3>Services</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li><a href="/index.html">Primary care</a></li>
                  <li><a href="/index.html">Specialty care</a></li>
                  <li><a href="/index.html">Emergency care</a></li>
                  <li><a href="/index.html">Diagnostic services</a></li>
                  <li><a href="/index.html">Rehabilitation services</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget contact-widget">
              <div className="widget-title">
                <h3>Contacts</h3>
              </div>
              <div className="widget-content">
                <ul className="info-list clearfix">
                  <li>
                    <img src="/assets/images/icons/icon-5.svg" alt="" />
                    Email: <a href="mailto:info@yourmail.com">info@yourmail.com</a>
                  </li>
                  <li>
                    <img src="/assets/images/icons/icon-6.svg" alt="" />
                    Call : <a href="tel:123045615523">+1 (230)-456-155-23</a>
                  </li>
                  <li>
                    <img src="/assets/images/icons/icon-7.svg" alt="" />
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu mt_60">
          <figure className="logo-box">
            <a href="/index.html">
              <img src="/assets/images/logo.png" alt="" />
            </a>
          </figure>
          <ul className="menu-list clearfix">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/service.html">Departments</a></li>
            <li><a href="/portfolio.html">Portfolio</a></li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom centred">
      <div className="auto-container">
        <div className="copyright">
          <p>
            <a href="/index.html">Medicinsk</a> &copy; 2025 All Right Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;