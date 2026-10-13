import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-4">
        {/* Left column: Product details */}
        <div className="col-md-6">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <a href={learnMore} className="text-decoration-none">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right column: Product image */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
