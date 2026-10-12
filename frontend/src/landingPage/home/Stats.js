import React from "react";

function Stats() {
  return (
      <div className="container p-3">
          <div className="row p-5">
              {/* Left column */}
              <div className="col-md-6 p-4">
                  <h1 className="fs-2 mb-4">Trust with confidence</h1>

                  <h2 className="fs-4">Customer-first always</h2>
                  <p className="text-muted">
                      That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making
                      us India's largest broker and contributing to 15% of daily retail exchange volumes in India.
                  </p>

                  <h2 className="fs-4">No spam or gimmicks</h2>
                  <p className="text-muted">
                      No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use
                      at your own pace, the way you like.{' '}
                      <a style={{ textDecoration: 'none' }} href="/philosophy">
                          Our philosophies
                      </a>
                      .
                  </p>

                  <h2 className="fs-4">The Zerodha universe</h2>
                  <p className="text-muted">
                      Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer services
                      tailored to your needs.
                  </p>

                  <h2 className="fs-4">Do better with money</h2>
                  <p className="text-muted">
                      With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively
                      help you do better with your money.
                  </p>
              </div>

              {/* Right column : image */}
              <div className="col-md-6 p-4">
                  <img
                      src="/media/images/ecosystem.png"
                      alt="Zerodha ecosystem"
                      className="img-fluid"
                      style={{ width: '100%' }}
                  />

                  <div className="text-center mt-3">
                      <a href="/products" className="mx-3" style={{ textDecoration: 'none' }}>
                          Explore our products <i className="fa-solid fa-arrow-right-long"></i>
                      </a>

                      <a href="/kite-demo" style={{ textDecoration: 'none' }}>
                          Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Stats;
