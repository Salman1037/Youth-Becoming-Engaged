export default function ContactPage() {
	return (
		<>
			
      <div>

 

   <section
     className="banner-section pt-5 pb-5"
     style={{ position: "relative", overflow: "hidden", background: "none" }}
   >
     {/* Background Image */}
     <div
       style={{
         position: "absolute",
         top: 0,
         left: 0,
         width: "100%",
         height: "100%",
         zIndex: 0,
         background:
           "url(/assets/images/background/contact_bg.jpg) center/cover no-repeat",
         opacity: 1,
       }}
     ></div>
 
     {/* Transparent Overlay */}
     <div
       style={{
         position: "absolute",
         top: 0,
         left: 0,
         width: "100%",
         height: "100%",
         zIndex: 1,
         background: "rgba(240,248,255,0.2)",
       }}
     ></div>
 
     <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
       <div className="row align-items-center">
         {/* Left Column: Text */}
         <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
           <div className="banner-content ps-lg-5">
             <span className="banner-subtitle text-primary fw-bold">
               Contact Youth Becoming Engaged
             </span>

             <h5 className="banner-title fw-bold display-4 mt-2 mb-4">
               Get in Touch With Us

               
             </h5>

             <p className="banner-text text-bold mb-4 fs-5"style={{ color: '#000' }}>
              We partner with agencies, schools, and families to provide comprehensive case management and youth mentoring. Our focus is on health, learning, and community engagement to create lasting positive change. Explore our programs, connect with our team, and join us in empowering youth and transforming communities.
             </p>

             <div className="banner-buttons d-flex">
               <a
                 href="mailto:info@example.com"
                 className="btn btn-primary btn-lg rounded-pill me-3 px-5"
               >
                 Email Us
               </a>
               <a
                 href="tel:000111555999"
                 className="btn btn-outline-primary btn-lg rounded-pill px-5"
               >
                 Call Us
               </a>
             </div>
           </div>
         </div>
 
         {/* You can add an optional right-side image here if needed */}
       </div>
     </div>
   </section>

 

  {/* page-title end */}
  {/* contact-info-two */}
 <section className="contact-info-two centred">
      <div
        className="pattern-layer"
        style={{ backgroundImage: 'url(assets/images/shape/shape-43.png)' }}
      />
      <div className="auto-container">
        <div className="row clearfix" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>

          {/* Office Location */}
          <div className="col-lg-4 col-md-6 col-sm-12 info-block" style={{ display: 'flex' }}>
            <div
              className="info-block-two wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
              style={{ width: '100%' }}
            >
              <div className="inner-box" style={{ height: '100%' }}>
                <div className="icon-box">
                  <img src="assets/images/icons/icon-23.svg" alt="" />
                </div>
                <h3>Office Location</h3>
                <p>
                  356 Bloomfield Ave<br />
                  Montclair, NJ 07042
                </p>
              </div>
            </div>
          </div>

          {/* Company Email */}
          <div className="col-lg-4 col-md-6 col-sm-12 info-block" style={{ display: 'flex' }}>
            <div
              className="info-block-two wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
              style={{ width: '100%' }}
            >
              <div className="inner-box" style={{ height: '100%' }}>
                <div className="icon-box">
                  <img src="assets/images/icons/icon-24.svg" alt="" />
                </div>
                <h3>Company Email</h3>
                <p>
                  <a href="mailto:sales@ybegrp.com">sales@ybegrp.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-lg-4 col-md-6 col-sm-12 info-block" style={{ display: 'flex' }}>
            <div
              className="info-block-two wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
              style={{ width: '100%' }}
            >
              <div className="inner-box" style={{ height: '100%' }}>
                <div className="icon-box">
                  <img src="assets/images/icons/icon-25.svg" alt="" />
                </div>
                <h3>Contact Us</h3>
                <p>
                  <a href="tel:8622156627">862-215-6627</a><br />
                  <strong>Business Hours:</strong><br />
                  Mon–Thu: 9:00am – 5:30pm<br />
                  Fri: 9:00am – 5:00pm
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  {/* contact-info-two end */}
  {/* contact-section */}
  <section className="contact-section sec-pad">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-42.png)'}} />
    <div className="auto-container">
      <div className="inner-box">
        <h2>Leave a Comment</h2>
        <form method="post" action="sendemail.php" id="contact-form" className="default-form"> 
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="text" name="username" placeholder="Your Name" required />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="email" name="email" placeholder="Your email" required />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="text" name="phone" required placeholder="Phone" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
              <input type="text" name="subject" required placeholder="Subject" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <textarea name="message" placeholder="Type Comment Here ..." defaultValue={""} />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
              <button className="theme-btn btn-two" type="submit" name="submit-form"><span>Send Message</span></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  {/* contact-section end */}
  {/* google-map-section */}
 
  {/* google-map-section */}

  <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
    <iframe
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
      src="https://www.google.com/maps?q=London+Eye,+Riverside+Building,+County+Hall,+Westminster+Bridge+Rd,+London+SE1+7PB,+United+Kingdom&output=embed"
      allowFullScreen
    ></iframe>
  </div>
</div>


		</>
	);
}
