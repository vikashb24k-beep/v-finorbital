import React from "react";

function Hero() {
  return (
    <section className="container py-5">
      {/* Heading */}
      <div className="row mt-5 mb-5">
        <div className="col-12 text-center">
          <h1 className="fs-2">
            Empowering the next generation of traders.
            <br />
            Learn, simulate, and grow with V-FinOrbital.
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="row border-top pt-5 g-4">
        {/* Left column */}
        <div className="col-md-6">
          <p className="fs-6 text-muted">
            V-FinOrbital is a stock market learning and trading
            simulation platform designed to make financial markets
            easier to understand. Our goal is to help users explore
            trading concepts, analyze stocks, and practice investment
            strategies in a simulated environment.
          </p>
        </div>

        {/* Right column */}
        <div className="col-md-6">
          <p className="fs-6 text-muted">
            Through virtual trading, portfolio tracking, and
            market visualization, V-FinOrbital aims to provide
            an interactive learning experience for aspiring
            traders and investors. Our vision is to make
            financial education more accessible through technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
