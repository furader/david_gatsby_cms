import React from 'react'
import { graphql } from 'gatsby'
import './all_css/style.css'
import './all_css/css/custom.css'
import './all_css/css/resume.css'
import './all_css/css/resume_fonts.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile, isTablet
} from "react-device-detect";

import './all_css/css/bootstrap.css'


export const Section3Template = (data) => {

  return <div id={`section-videos`} className="content-wrap bg-dr bottommargin bottompadding">
            <div className="portfolio portfolio-5 portfolio-full portfolio-notitle clearfix videoContainer" >

                <article className="portfolio-item pf-graphics pf-uielements" data-animate="fadeIn">
                  <div className="portfolio-image">
                    <a href="#">
                      <img src="img/video-grid-1.png" alt="Non Bullshit Innovation" />
                    </a>
                    
                  </div>
                  <div className="portfolio-desc">
                      <h3><a href="portfolio-single-video.html">Business Opportunities from Tech</a></h3>
                      <span><a href="#"></a><a href="#">Mercer Global Investment Forum</a></span>
                  </div>
                </article>

                <article className="portfolio-item pf-graphics pf-uielements" data-animate="fadeIn" data-delay="150">
                  <div className="portfolio-image">
                    <a href="#">
                      <img src="img/video-grid-5.png" alt="Non Bullshit Innovation" />
                    </a>
                      <div className="portfolio-overlay">
                        <a href="https://www.youtube.com/watch?v=kklyo_6sHVc&t=7s" className="left-icon" data-lightbox="iframe"><i className="icon-line-play"></i></a>
                        <a href="portfolio-single-video.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
                      </div>
              </div>
                    <div className="portfolio-desc">
                      <h3><a href="portfolio-single-video.html">On Non-Bullshit Innovation</a></h3>
                      <span><a href="#"></a> <a href="#">PropTech, 2018</a></span>
                    </div>
                </article>
    </div>
    </div>
}




const Section3Page = (a) => {
  const {data} = a;
  const {markdownRemark} = data;





  return <Section3Template {...data.markdownRemark.frontmatter} />;

}
export default Section3Page

export const pageQuery = graphql`
query {
          markdownRemark(frontmatter: {identifier: {eq: "section3"}}) {
          frontmatter {
          title
      templateKey
      identifier
      testimonials {
          author
        quote
      }
    }
  }
}

`