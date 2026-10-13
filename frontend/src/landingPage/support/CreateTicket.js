
import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  const topics = [
    {
      title: "Account Opening",
      icon: "fa-user-plus",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "NRI Account Opening",
        "Getting Started",
      ],
    },
    {
      title: "Your V-FinOrbital Account",
      icon: "fa-user-circle",
      links: [
        "Account Profile",
        "Login Issues",
        "Password Reset",
        "Account Security",
      ],
    },
    {
      title: "Trading and Markets",
      icon: "fa-chart-line",
      links: [
        "Trading Basics",
        "Intraday Trading",
        "Market Orders",
        "Market Data and Charts",
      ],
    },
    {
      title: "Funds and Payments",
      icon: "fa-money-bill",
      links: [
        "Add Funds",
        "Withdraw Funds",
        "Payment Issues",
        "Transaction History",
      ],
    },
    {
      title: "Charges and Pricing",
      icon: "fa-calculator",
      links: [
        "Brokerage Charges",
        "List of Charges",
        "Brokerage Calculator",
        "Understanding Fees",
      ],
    },
    {
      title: "Technical Support",
      icon: "fa-headset",
      links: [
        "Website Not Working",
        "Chart Loading Issues",
        "App and Browser Issues",
        "Contact Support",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="fs-2 mb-3">
            Create a Support Ticket
          </h1>
          <p className="text-muted">
            Select a relevant topic to find help with V-FinOrbital.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {topics.map((topic, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={topic.title}>
            <div className="card h-100 border-0 shadow-sm p-4">
              <h4 className="fs-5 mb-3">
                <i
                  className={`fa ${topic.icon} me-2 text-primary`}
                  aria-hidden="true"
                />
                {topic.title}
              </h4>

              <ul className="list-unstyled mb-0">
                {topic.links.map((link) => (
                  <li key={link} className="mb-2">
                    <Link
                      to={`/support/create-ticket?topic=${encodeURIComponent(
                        link
                      )}`}
                      className="text-decoration-none text-secondary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
