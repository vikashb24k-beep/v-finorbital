import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">

        {/* Left column: Product image */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Right column: Product details */}
        <div className="col-md-6">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div className="d-flex flex-wrap gap-3 mb-4">
            <a href={tryDemo}>Try Demo →</a>
            <a href={learnMore}>Learn more →</a>
          </div>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                alt="Download on the App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
