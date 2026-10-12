import React from 'react';
function Education() {
    return (
        <div className="container mt-4">
            <div className="row align-items-center">
                {/* Left column:  image */}
                <div className="col-md-6 text-center p-5">
                    <img src="/media/images/education.svg" alt="education" className="img-fluid" style={{width : "90%"}}/>
                </div>

                {/* Right column: Text and lists */}
                <div className="col-md-6 p-5 mt-5">
                    <h1 className='fs-2'>Free and open market education</h1>

                    <p className="mb-3">
                        Varsity, the largest online stock market education book in the world covering everything from
                        the basics to advanced trading.
                    </p>
                    <a className='mb-3 mt-3' href="/" style={{ textDecoration: 'none' }}>
                        Varsity <i className="fa-solid fa-arrow-right-long"></i>
                    </a>

                    <p className="mt-3">
                        TradingQ&A, the most active trading and investment community in India for all your market
                        related queries.
                    </p>
                    <a href="/" style={{ textDecoration: 'none' }}>
                        TradingQ& <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
