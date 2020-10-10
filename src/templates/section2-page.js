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


export const Section2Template = (data) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return <section id={`content`} className="bg-dr">

    <div id={`section-testimonials`} className="content-wrap bg-dr" style={{ display: "block" }}>
      <h3 className="center dr-heading myCaroTitle">{data.title}</h3>
      <Carousel responsive={responsive}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={100}
        containerclassName="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={isMobile === true ? "mobile" : isTablet === true ? "tablet" : "desktop"}
        dotListclassName="custom-dot-list-style"
        itemclassName="carousel-item-padding-40-px"
      >
        {
          data.testimonials.map(da => {

            return <div className="testimonial bg-dr-2 gradient" style={{ margin: " 0 30px -50px 30px" }}  >
              <div className="testi-content" >
                <p> {da.quote.trim()} </p>
                <div className="testi-meta">
                  {da.author}
                </div>
              </div>

            </div>

          })

        }
      </Carousel>
    </div>
    <div id={`section-videos`} className="content-wrap bg-dr bottommargin bottompadding">
      <div className="portfolio portfolio-5 portfolio-full portfolio-notitle clearfix videoContainer" >
      <button type="button" class="btn btn-primary video-btn" data-toggle="modal"
       data-src="https://youtu.be/EXrc0W4CXSk" data-target="#myModal">
  Play Video 1 - autoplay
</button>
        <article className="portfolio-item pf-graphics pf-uielements" data-animate="fadeIn">
          <div className="portfolio-image">
            <a href="#">
              <img src="img/video-grid-1.png" alt="Non Bullshit Innovation" />
            </a>
            <div className="portfolio-overlay">
            <a href="#" className="left-icon" data-toggle="modal" 
            data-target="#myModal" 
            data-src="https://youtu.be/EXrc0W4CXSk"><i className="icon-line-play"></i> </a>


              <a href="portfolio-single-video.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
            </div>
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
              <a href="https://youtu.be/EXrc0W4CXSk" className="left-icon" data-lightbox="iframe"><i className="icon-line-play"></i></a>
              <a href="portfolio-single-video.html" className="right-icon"><i className="icon-line-ellipsis"></i></a>
            </div>
          </div>
          <div className="portfolio-desc">
            <h3><a href="portfolio-single-video.html">On Non-Bullshit Innovation</a></h3>
            <span><a href="#"></a> <a href="#">PropTech, 2018</a></span>
          </div>
        </article>
        
<div className="modal fade" id={`myModal`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">

      
      <div className="modal-body">

       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>        
<div className="embed-responsive embed-responsive-16by9">
  <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
</div>
        
        
      </div>

    </div>
  </div>
</div> 
  
  

  
        <div className="modal fade" id={`videoModal`} tabindex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
            <div className="modal-header bg-dark border-dark">
                <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body bg-dark p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="https://youtu.be/EXrc0W4CXSk" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
    </div>
  </section>

}


/*
 <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModal" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <div>
                  <iframe width="100%" height="350" src=""></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        */

const Section2Page = (a) => {
  const { data } = a;
  const { markdownRemark } = data;





  return <Section2Template {...data.markdownRemark.frontmatter} />;

}
export default Section2Page

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: {identifier: {eq: "section2"}}) {
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