import React from 'react'
import PropTypes from 'prop-types'
import { Section1Template } from '../../templates/section1-page'
import { graphql, useStaticQuery } from 'gatsby'
import { Spring } from 'react-spring/renderprops'
import './../../templates/all_css/style.css'
import './../../templates/all_css/css/custom.css'
import './../../templates/all_css/css/resume.css'
import './../../templates/all_css/css/resume_fonts.css'

import './../../templates/all_css/css/bootstrap.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Section1Preview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();




  if (data) {
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
  
    
  } else {
    return <div>Loading...</div>
  }
}



export default Section1Preview
