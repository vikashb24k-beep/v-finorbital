import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 border-top">
        <div className="col-12">
          <h1 className="text-center mt-4">People</h1>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 p-5 text-center">
          <img
            src="/media/images/vikash.png"
            alt="Vikash Kumar"
            className="img-fluid rounded-circle"
            style={{ width: "40%" }}
          />

          <h4 className="mt-3">Vikash Kumar</h4>
          <h6>Founder &amp; CEO</h6>
        </div>

        <div className="col-md-6 p-4">
          <p>
            V-FinOrbital is a stock market learning and trading
            simulation platform designed to help users explore
            market data, manage a virtual portfolio, and understand
            trading through practice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
