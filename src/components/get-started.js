import React from 'react';

import Img1 from '../images/invest1.svg';
import Img2 from '../images/invest2.svg';
import Img3 from '../images/invest3.svg';
import Img4 from '../images/invest4.svg';
import Img5 from '../images/invest5.svg';

const Started = (props) => {
    return(
        <>
            <div className="container" id="get-started">
                <h2>
                    How It Works <br/>
                    <span>Learn to Invest</span>
                </h2>

                <div className="vl"></div>

                <div className="grid-three-columns">
                    <div className="img-invest">
                        <img src={Img1} alt="search"/>
                    </div>
                    <div className="steps">1</div>
                    <div className="content-invest">
                        Read Chapter 7 and pick one or two companies that look interesting to you for investment in the present situation.
                    </div>
                    
                    <div className="content-invest reverse-2" style={{textAlign: 'right'}}>
                        Open the brokerage account with one of the firms in Appendix 2.1, such as Charles Schwab. On the brokerage website, read Profile of the Company which describes what the company does. Look at the Stock Price Data of the Company in the terms described in Section 3.4.
                    </div>
                    <div className="steps reverse-1">2</div>
                    <div className="img-invest">
                        <img src={Img2} alt="search"/>
                    </div>
                    
                    <div className="img-invest">
                        <img src={Img3} alt="search"/>
                    </div>
                    <div className="steps">3</div>
                    <div className="content-invest">
                        Read carefully Chapter 5 on Stock Selection and Analysis. It tells you how to analyze stocks and directs you to the assessment of the stock of the company by a number of financial companies.
                    </div>
                    
                    <div className="content-invest reverse-2" style={{textAlign: 'right'}}>
                        After you have decided, read Section 2.12 on How to Trade Stocks. Place the order now. You may call the brokerage if you need help in placing the order.
                    </div>
                    <div className="steps reverse-1">4</div>
                    <div className="img-invest">
                        <img src={Img4} alt="search"/>
                    </div>
                    
                    <div className="img-invest">
                        <img src={Img5} alt="search"/>
                    </div>
                    <div className="steps">5</div>
                    <div className="content-invest">
                        Congratulations! You are now a Stock Investor.
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Started;