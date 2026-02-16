import React from "react";
import Link from "next/link";

const Callaction: React.FC = () => (
  <section className="py-5 bg-primary text-center">
    <div className="container">
      <h2 className="mb-3 fw-bold text-white">Get Involved Call to Action</h2>
      <p className="mb-4 text-white">
        Help us build healthier, stronger and more engaged communities for young people.
      </p>
      <Link
        href="/contact"
        className="btn btn-light btn-lg fw-bold"
      >
        Contact &amp; Get Involved
      </Link>
    </div>
  </section>
);

export default Callaction;