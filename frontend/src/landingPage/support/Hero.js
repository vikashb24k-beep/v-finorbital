
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      console.log("Searching for:", search);
      // Connect this to your support search logic later.
    }
  };

  return (
    <section className="container-fluid" id="supportHero">
      {/* Support Header */}
      <div className="container-fluid px-4 px-md-5 py-4" id="supportWrapper">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <h4 className="mb-0">V-FinOrbital Support Portal</h4>

          <Link to="/support/tickets" className="text-decoration-none">
            Track Tickets
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Search Section */}
          <div className="col-12 col-md-6">
            <h1 className="fs-3 mb-4">
              Search for an answer or browse help topics
            </h1>

            <form onSubmit={handleSearch}>
              <div className="input-group mb-4">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Eg. How do I learn intraday trading?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search support topics"
                />

                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </form>

            <div className="d-flex flex-wrap gap-3">
              <Link to="/support/account" className="text-decoration-none">
                Account Help
              </Link>

              <Link to="/support/trading" className="text-decoration-none">
                Trading Basics
              </Link>

              <Link to="/support/margins" className="text-decoration-none">
                Intraday Margins
              </Link>

              <Link to="/support/manual" className="text-decoration-none">
                User Manual
              </Link>
            </div>
          </div>

          {/* Featured Section */}
          <div className="col-12 col-md-6">
            <h2 className="fs-3 mb-4">Featured Help Topics</h2>

            <ol className="ps-3">
              <li className="mb-3">
                <Link to="/support/market-updates" className="text-decoration-none">
                  Market Updates and Important Announcements
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/support/risk-management" className="text-decoration-none">
                  Intraday Trading and Risk Management
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/support/getting-started" className="text-decoration-none">
                  Getting Started with V-FinOrbital
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
