import React from 'react';
function Pricing() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no
                        hidden charges.
                    </p>
                    <a  href="/" style={{ textDecoration: 'none' }}>
                        See pricing <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col p-4 border">
                            <h1 className="mb-3">₹0</h1>
                            <p>
                                Free account
                                <br /> opening
                            </p>
                        </div>
                        <div className="col p-4 border">
                            <h1 className="mb-3">₹0</h1>
                            <p>
                                Free equity delivery
                                <br /> and direct mutual funds
                            </p>
                        </div>
                        <div className="col p-4 border">
                            <h1 className="mb-3">₹20</h1>
                            <p>

                                Intraday and
                                <br /> F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
