import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		        <Helmet title="About the Author | Shyam Bahadur" />
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img alt="Rachel G. Carrington" src={AuthorImg} />
                            </div>

                            {/* <div className="heading-quote">
                                <h4>
                                  “When you hold on long enough, love will find a way to make it work somehow”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div> */}
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            The author developed the interest in stock market investing early in his professional career. This led him to attend the formal and informal lectures and presentations and further participate in discussions in the groups with similar interests. He attended a university class as well which gave him an opportunity to discuss the subject matter in a scholarly setting. Overall he felt that some books were too theoretical from the standpoint of practical investing and some were recipes for making a quick buck. In other words, there was a lack of the books providing the coverage of investments from the fundamental and practical standpoints and the approach was fragmented that is it either covered bonds or stocks and never the two together.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Shyam Bahadur</span>
                                </span>
                            </p>
                            
                        </article>
                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;
