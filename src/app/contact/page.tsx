export default function ContactPage() {
	return (
		<>
			
      <div>
  {/* page-title */}
  <section className="page-title p_relative centred">
    <div className="bg-layer" style={{backgroundImage: 'url(assets/images/background/page-title.jpg)'}} />
    <figure className="image-layer"><img src="assets/images/resource/page-title-1.png" alt="" /></figure>
    <div className="auto-container">
      <div className="content-box">
        <h1>Contact US</h1>
        <ul className="bread-crumb clearfix">
          <li><a href="index.html">Home</a></li>
          <li>Contact US</li>
        </ul>
      </div>
    </div>
  </section>
  {/* page-title end */}
  {/* contact-info-two */}
  <section className="contact-info-two centred">
    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-43.png)'}} />
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 info-block">
          <div className="info-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="icon-box"><img src="assets/images/icons/icon-23.svg" alt="" /></div>
              <h3>Office Location</h3>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 info-block">
          <div className="info-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="icon-box"><img src="assets/images/icons/icon-24.svg" alt="" /></div>
              <h3>Company Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a><br /><a href="mailto:contact@example.com">contact@example.com</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 info-block">
          <div className="info-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="icon-box"><img src="assets/images/icons/icon-25.svg" alt="" /></div>
              <h3>Contact Us</h3>
              <p><a href="tel:000111555999">+000 111555999</a><br /><a href="tel:000111555888">+000 111555888</a></p>
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
