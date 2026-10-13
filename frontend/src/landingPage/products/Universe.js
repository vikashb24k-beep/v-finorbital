import React from 'react';

function Universe() {
    return (
        <section className="container py-5">
            {/* Technology / About section */}
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h2 className="fs-4">Want to learn more about V-FinOrbital?</h2>

                    <a href="/about" className="text-decoration-none">
                        Discover our platform →
                    </a>
                </div>
            </div>

            {/* Universe heading */}
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h2>The V-FinOrbital Universe</h2>

                    <p className="text-muted">
                        Extend your trading and learning experience with useful tools and educational resources.
                    </p>
                </div>
            </div>

            {/* Product grid */}
            <div className="row g-4">
                {/* Column 1 */}
                <div className="col-12 col-md-4">
                    <div className="text-center mb-5">
                        <img
                            src="/media/images/zerodhaFundhouse.png"
                            alt="Fundhouse"
                            className="img-fluid mb-3"
                            style={{ maxWidth: '160px', maxHeight: '70px' }}
                        />

                        <p className="text-muted">
                            Explore index funds and learn about long-term investing and financial planning.
                        </p>
                    </div>

                    <div className="text-center mb-4">
                        <img
                            src="/media/images/streakLogo.png"
                            alt="Streak"
                            className="img-fluid mb-3"
                            style={{ maxWidth: '140px', maxHeight: '70px' }}
                        />

                        <p className="text-muted">
                            Learn about systematic trading strategies, backtesting, and rule-based trading concepts.
                        </p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="col-12 col-md-4">
                    <div className="text-center mb-5">
                        <img
                            src="/media/images/sensibullLogo.svg"
                            alt="Sensibull"
                            className="img-fluid mb-3"
                            style={{ maxWidth: '160px', maxHeight: '70px' }}
                        />

                        <p className="text-muted">
                            Explore options strategies and understand market analysis and derivatives.
                        </p>
                    </div>

                    <div className="text-center mb-4">
                        <img
                            src="/media/images/smallcaseLogo.png"
                            alt="Smallcase"
                            className="img-fluid mb-3"
                            style={{ maxWidth: '150px', maxHeight: '70px' }}
                        />

                        <p className="text-muted">Learn about diversified investment baskets and thematic investing.</p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="col-12 col-md-4">
                    <div className="text-center mb-5">
                        <img
                            src="/media/images/goldenpiLogo.png"
                            alt="GoldenPi"
                            className="img-fluid mb-3"
                            style={{ maxWidth: '150px', maxHeight: '70px' }}
                        />

                        <p className="text-muted">Explore fixed-income investment concepts and learn about bonds.</p>
                    </div>

                    <div className="text-center mb-4">
                        <img
                            src="/media/images/dittoLogo.png"
                            alt="Ditto"
                            className="img-fluid mb-3"
                            style={{ maxWidth: '140px', maxHeight: '70px' }}
                        />

                        <p className="text-muted">
                            Learn about insurance, financial protection, and responsible financial planning.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sign-up button */}
            <div className="text-center mt-4">
                <a href="/signup" className="btn btn-primary px-4 py-2">
                    Sign up for free
                </a>
            </div>
        </section>
    );
}

export default Universe;
