import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row g-4">

          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/" className="d-inline-block mb-3">
              <img
                src="/media/images/mainLogo.png"
                alt="V-FinOrbital"
                style={{ width: "180px", maxWidth: "100%", height: "auto" }}
              />
            </Link>

            <p className="text-muted small">
              V-FinOrbital — Trade Smart. Grow Beyond.
            </p>

            <p className="text-muted small">
              © 2026 V-FinOrbital. All rights reserved.
            </p>
          </div>

          {/* Account */}
          <div className="col-6 col-md-6 col-lg-2">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/signup">Create account</Link></li>
              <li><Link className="footer-link" to="/portfolio">Portfolio</Link></li>
              <li><Link className="footer-link" to="/orders">Orders</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-6 col-lg-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/about">About us</Link></li>
              <li><Link className="footer-link" to="/product">Products</Link></li>
              <li><Link className="footer-link" to="/pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-6 col-lg-2">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/support">Help center</Link></li>
              <li><Link className="footer-link" to="/support">Contact us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-6 col-md-6 col-lg-2">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/privacy">Privacy policy</Link></li>
              <li><Link className="footer-link" to="/terms">Terms of use</Link></li>
            </ul>
          </div>

        </div>

        <hr className="my-4" />

        <div className="text-muted small">
          <p>
            V-FinOrbital is a stock market learning and trading
            simulation project. Unless explicitly implemented and
            verified, market prices, orders, balances, and portfolio
            results should not be treated as real-time financial data
            or actual brokerage transactions.
          </p>
          <p className="mb-0">
            This platform is for educational purposes and does not
            provide investment advice or execute real trades.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
