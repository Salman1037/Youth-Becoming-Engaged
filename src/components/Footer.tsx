
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

          {/* About */}
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget about-widget">
              <div className="widget-title">
                <h3>About Us</h3>
              </div>
              <div className="widget-content">
                <p>
                  Empowering youth through mentoring, wellness, and community engagement.
                </p>
                <ul className="social-links clearfix">
                  <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="/"><i className="fab fa-dribbble"></i></a></li>
                  <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links (ONLY required pages) */}
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml_70">
              <div className="widget-title">
                <h3>Links</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/partnerships">Partnerships</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services (also updated to required pages only, styling unchanged) */}
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget ml_70">
              <div className="widget-title">
                <h3>Services</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/partnerships">Partnerships</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget contact-widget">
              <div className="widget-title">
                <h3>Contacts</h3>
              </div>
              <div className="widget-content">
                <ul className="info-list clearfix">
                  <li>
                    <img src="/assets/images/icons/icon-5.svg" alt="" />
                    Email: <a href="mailto:sales@ybegrp.com">sales@ybegrp.com</a>
                  </li>
                  <li>
                    <img src="/assets/images/icons/icon-6.svg" alt="" />
                    Contact: <a href="tel:8622156627">862-215-6627</a>
                  </li>
                  <li>
                    <img src="/assets/images/icons/icon-7.svg" alt="" />
                    Address: 356 Bloomfield Ave<br />Montclair, W5, 07042
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Footer menu */}
        <div className="footer-menu mt_60">
          <figure className="logo-box">
            <a href="/">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                style={{ height: '100px', width: 'auto', maxWidth: '320px' }}
              />
            </a>
          </figure>

          <ul className="menu-list clearfix">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/partnerships">Partnerships</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div className="footer-bottom centred">
      <div className="auto-container">
        <div className="copyright">
          <p>
            <a href="/">Youth Becoming Engaged</a> &copy; 2026 All Right Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;