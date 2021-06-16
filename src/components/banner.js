import React from 'react'


const Banner = ()=>{

    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-columns">
                        <div className="grid-child-elem">
                            <div className="banner-text">
                                {/* <p>
                                    The
                                </p>  */}

                                <h1>
                                <span style={{display: 'inline-block', color: '#8bd5e1'}}>Guide </span> to Building
                                Wealth With Stocks, Bonds, ETFS and<span style={{display: 'inline-block',color: '#8bd5e1'}}> Mutual Funds.</span>
                                </h1>

                                {/* <p className="right-sub-text">
                                   <span>
                                    Are you giving God His?
                                   </span>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;