import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/main_book.png'



const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'shyam-bahadur',
	  config: { identifier:  12, slug}
    }
      

	return (
		<>
		 	<Layout>
		        <Helmet title="About the Book | Shyam Bahadur" />
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Don't Work for the Money, Let the Money Work for You`,
                                    spanFirst:``,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                        The reader is not expected to have prior knowledge of investing. The book guides the reader to build wealth with modest earnings. 
                                        </p>

                                        <p>
                                        The highlights of the topics covered in the book are: 
                                        </p>

                                        <p>
                                        1. Concept of compounding, dollar cost averaging and introduction of tax deferred plans<br/> 
                                        2. Discussion of stocks and stock market, financial reports, valuation measures, stock selection and analysis with practical examples <br/>
                                        3. Concept of mutual funds, selection and analysis, practical examples <br/>
                                        4. Concept of exchange traded funds, selection and analysis <br/>
                                        5. Discussion of different kinds of bonds, fundamental aspects and selection<br/>
                                        6. Portfolio development in light of the asset allocation, tax considerations and rebalancing; model portfolios<br/>
                                        7.	Evaluation of market levels and strategies for bear market <br/>
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'#',
                                        barnes:'https://www.barnesandnoble.com/w/guide-to-investing-in-stocks-bonds-etfs-and-mutual-funds-shyam-bahadur/1139421662?ean=9781648953750',
                                        amazon:'https://www.amazon.ca/Guide-investing-Stocks-Bonds-Mutual-ebook/dp/B094BWYL5V/ref=sr_1_1?dchild=1&keywords=9781648953750&qid=1620414989&s=books&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.ca/Guide-investing-Stocks-Bonds-Mutual/dp/1648953743/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1620414989&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/guide-to-investing-in-stocks-bonds-etfs-and-mutual-funds-shyam-bahadur/1139421662?ean=9781648953743',
                                        booksamillion:'https://www.booksamillion.com/p/Guide-investing-Stocks-Bonds-ETFS/Shyam-Bahadur/9781648953743?id=8049069540563&_ga=2.85900633.1536361517.1622560496-2145380449.1604906972',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;