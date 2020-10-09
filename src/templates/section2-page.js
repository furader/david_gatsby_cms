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
import im from '../../static/img/coffee.png'

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
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={isMobile === true ? "mobile": isTablet === true? "tablet": "desktop"}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
        {
          data.testimonials.map(da => {

            return <div className="testimonial bg-dr-2 gradient" style={{ margin: " 0 30px -50px 30px" }}  >
              <div className="testi-content" >
                <p> {da.quote} </p>
                <div className="testi-meta">
                      {da.author}
                    </div>
              </div>

            </div>

          })

        }
      </Carousel>
    </div>
  </section>

}


/*
<div style={{ margin: " 0 30px -50px 30px" }} >
        <div className="owl-carousel testimonials-carousel carousel-widget myCaro"

          data-margin="20" data-items-sm="1" data-items-md="2" data-items-xl="3">
          {
            data.testimonials.map(da => {
              return <div className="oc-item">
                <div className="testimonial bg-dr-2 gradient">
                  <div className="testi-content">
                    <p>{da.quote}</p>
                    <div className="testi-meta">
                      {da.author}
                    </div>
                  </div>
                </div>
              </div>


            })


          }
        </div>
      </div>

*/

const Section2Page = (a) => {
  const {data} = a;
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