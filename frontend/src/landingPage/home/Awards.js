import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Left column: Broker image */}
        <div className="col-md-6 text-center p-5">
          <img
            src="/media/images/largestBroker.svg"
            alt="Largest stock broker"
            className="img-fluid"
          />
        </div>

        {/* Right column: Text and lists */}
        <div className="col-md-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>

          <p className="mb-5">
            2+ million Zerodha clients contribute to 15% of
            India's daily trading volume through trading and
            investments in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and growth products</li>
              </ul>
            </div>
          </div>

          <img
            src="/media/images/pressLogos.png"
            alt="Press logos" style={{width:"90%"}}
            className="img-fluid mt-3"
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;
