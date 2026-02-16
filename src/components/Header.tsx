import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="main-header">
    {/* Header Top */}
    <div className="header-top">
      <div className="outer-container">
        <div className="top-inner">
          <ul className="info-list clearfix">
            <li>
              <i className="icon-46"></i>
              <a href="mailto:example@info.com">example@info.com</a>
            </li>
            <li>
              <i className="icon-2"></i>
              <a href="/index">Pay your bill</a>
            </li>
            <li>
              <i className="icon-3"></i>
              Open Hours: <span>Mon - Fri: 8:00am to 5:00pm</span>
            </li>
          </ul>
          <ul className="social-links clearfix">
            <li>
              <h6>Follow Us</h6>
            </li>
            <li>
              <a href="/index">
                <i className="icon-4"></i>
              </a>
            </li>
            <li>
              <a href="/index">
                <i className="icon-5"></i>
              </a>
            </li>
            <li>
              <a href="/index">
                <i className="icon-6"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Header Lower */}
    <div className="header-lower">
      <div className="outer-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="/">
                  <img src="/assets/images/logo.png" alt="Logo" style={{ height: '100px', width: 'auto', maxWidth: '320px' }} />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <div className="mobile-nav-toggler">
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light clearfix">
              <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/partnerships">Partnerships</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact & Get Involved</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="menu-right-content">
          
            <div className="btn-box">
              <a href="/index" className="theme-btn btn-one">
                <span>Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sticky Header */}
    <div className="sticky-header">
      <div className="outer-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="/index">
                  <img src="/assets/images/logo.png" alt="Logo" style={{ height: '80px', width: 'auto', maxWidth: '220px' }} />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <nav className="main-menu clearfix">
              {/* Menu will come through Javascript */}
            </nav>
          </div>
          <div className="menu-right-content">
            <div className="support-box">
              <div className="icon-box">
                <img src="/assets/images/icons/icon-1.svg" alt="Emergency Icon" />
              </div>
              <span>Emergency Call</span>
              <h6>
                <a href="tel:12463330088">+ 1 (246) 333-0088</a>
              </h6>
            </div>
            <div className="btn-box">
              <a href="/index" className="theme-btn btn-one">
                <span>Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;