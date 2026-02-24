import React from "react";

const funfacts = [
  {
    iconClass: "icon-37",
    count: 180,
    label: "Expert Doctors",
    plus: true,
  },
  {
    iconClass: "icon-38",
    count: 12.2,
    label: "Different Services",
    plus: true,
  },
  {
    iconClass: "icon-39",
    count: 200,
    label: "Multi Services",
    plus: true,
  },
  {
    iconClass: "icon-40",
    count: 8,
    label: "Awards Win",
    plus: false,
  },
];

const FunFactSection: React.FC = () => (
  <section className="funfact-section">
    <div className="auto-container">
      <div className="inner-container">
        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-34.png)" }}></div>
        <div className="row clearfix">
          {funfacts.map((fact, idx) => (
            <div className="col-lg-3 col-md-6 col-sm-12 funfact-block" key={fact.label}>
              <div className="funfact-block-two">
                <div className="inner-box">
                  <div className="icon-box"><i className={fact.iconClass}></i></div>
                  <div className="count-outer count-box">
                    <span className="count-text" data-speed="1500" data-stop={fact.count}>0</span>
                    {fact.plus && <span>+</span>}
                  </div>
                  <p>{fact.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FunFactSection;
