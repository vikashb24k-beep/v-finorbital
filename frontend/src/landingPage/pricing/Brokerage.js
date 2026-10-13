
import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-4 p-md-5 mt-5 text-center border-top">
        {/* Brokerage Calculator Information */}
        <div className="col-12 col-md-8 p-3 p-md-4">
          <Link
            to="/brokerage-calculator"
            className="text-decoration-none"
          >
            <h3 className="fs-5">Brokerage Calculator</h3>
          </Link>

          <ul
            className="text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2",
              fontSize: "12px",
            }}
          >
            <li>
              Call & Trade and RMS auto-square-off charges may apply
              per order.
            </li>
            <li>Digital contract notes can be sent via email.</li>
            <li>
              Physical contract notes may involve printing and
              courier charges.
            </li>
            <li>
              NRI account charges may vary depending on the account
              type and applicable terms.
            </li>
            <li>
              Additional charges may apply to accounts with a debit
              balance.
            </li>
          </ul>
        </div>

        {/* List of Charges */}
        <div className="col-12 col-md-4 p-3 p-md-4">
          <Link
            to="/charges"
            className="text-decoration-none"
          >
            <h3 className="fs-5">List of Charges</h3>
          </Link>

          <p className="text-muted small">
            Understand the different fees associated with trading
            and investing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
