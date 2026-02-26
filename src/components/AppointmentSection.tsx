
"use client";
import React, { useState } from "react";

const accordionData = [
	{
		title: "Emergency Departments",
		number: "01",
		content:
			"The medical professionals who treated me showed unmatched expertise, compassion, and dedication. Their care and support helped me overcome a serious health challenge and get back to living my life.",
	},
	{
		title: "Covid-19 Testing Clinics",
		number: "02",
		content:
			"The medical professionals who treated me showed unmatched expertise, compassion, and dedication. Their care and support helped me overcome a serious health challenge and get back to living my life.",
	},
	{
		title: "GP (General practice)",
		number: "03",
		content:
			"The medical professionals who treated me showed unmatched expertise, compassion, and dedication. Their care and support helped me overcome a serious health challenge and get back to living my life.",
	},
];

const AppointmentSection: React.FC = () => {
	const [openIndex, setOpenIndex] = useState(0); // First item open by default

	return (
		<section className="appointment-section about-page">
			<div
				className="pattern-layer"
				style={{ backgroundImage: "url(/assets/images/shape/shape-17.png)" }}
			></div>
			<div className="outer-container clearfix">
				<div className="left-column">
					<div
						className="bg-layer"
						style={{ backgroundImage: "url(/assets/images/background/appointment-bg.webp)" }}
					></div>
					<div className="content-box">
						<div className="icon-box">
							<img src="/assets/images/icons/icon-4.svg" alt="" />
						</div>
						<h3>Need a Doctor for Check-up? Call for an Emergency Service!</h3>
						<span>
							<a href="tel:112345615523">Call: +1 (123)-456-155-23</a>
						</span>
					</div>
				</div>
				<div className="right-column">
					<div className="content_block_five">
						<div className="content-box">
							<div className="sec-title light mb_30">
								<span className="sub-title mb_5">About the company</span>
								<h2>Health service for you</h2>
								<p>
									The medical professionals who treated me showed unmatched expertise, compassion, and dedication. Their care and support helped me overcome a serious health challenge and get back to living my life.
								</p>
							</div>
							<ul className="accordion-box">
								{accordionData.map((item, idx) => (
									<li
										className={`accordion block${openIndex === idx ? " active-block" : ""}`}
										key={item.number}
									>
										<div
											className={`acc-btn${openIndex === idx ? " active" : ""}`}
											onClick={() => setOpenIndex(idx)}
											style={{ cursor: "pointer" }}
										>
											<div className="icon-box">
												<i className="icon-22"></i>
											</div>
											<h4>
												<span>{item.number}</span>{item.title}
											</h4>
										</div>
										{openIndex === idx && (
											<div className="acc-content current">
												<p>{item.content}</p>
											</div>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppointmentSection;
