import React from 'react'
import AuthorImg from '../../static/author/Shyam-Bahadur.jpg'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                        The author has a PhD in Mechanical Engineering from the University of Michigan, Ann Arbor. He had been the Professor of Mechanical Engineering at Iowa State University in the Mechanical Engineering Department for more than forty years. 
                        </p>

                        <h1 className="author-name-tag">
                            <span>&nbsp;Shyam &nbsp;</span>
                            <span>Bahadur</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;
