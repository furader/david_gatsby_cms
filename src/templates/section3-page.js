import React from 'react'
import { graphql } from 'gatsby'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './../../static/all_css/style.css'
import './../../static/all_css/css/custom.css'
import './../../static/all_css/css/resume.css'
import './../../static/all_css/css/resume_fonts.css'
// import './all_css/css/resume_fonts.css'
// 
// import './all_css/css/resume_fonts.css'
// import './all_css/css/font-icons.css'
// import './all_css/css/dark.css'
// import './all_css/css/interior_fonts.css'
// import './all_css/css/interior-design.css'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile, isTablet
} from "react-device-detect";

import './../../static/all_css/css/bootstrap.css'


export class Section3Template extends React.Component {

  constructor(a) {
    super(a);
    
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
      },
      tablet: {
        breakpoint: { max: 900, min: 464 },
        items: 5
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4
      }
    };
    this.state = {
      responsive: responsive
    }
  }


  render() {

    return (<div id="section-logos" className="section footer-stick notopmargin bg-dr-2 gradient">
                <h3 className="center dr-heading">Some of the groups that have hosted David Rowan</h3>
                <Carousel responsive={this.state.responsive}
          showDots={true}
          responsive={this.state.responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          // customTransition="all 150"
          transitionDuration={700}
          containerclassName="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={isMobile === true ? "mobile" : isTablet === true ? "tablet" : "desktop"}
          itemclassName="carousel-item-padding-40-px"
        >
          <div className="oc-item text-center">
                          <a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}}
                            src="img/logos2/logo1.png" alt="Brands" /> </a>
                        </div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo2.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}}src="img/logos2/logo3.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo4.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo5.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo6.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo7.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo8.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo9.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo10.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo11.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo12.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo13.png" alt="Brands" /></a></div>
                        <div className="oc-item text-center"><a href="#"><img style={{maxHeight:"60px",width:"auto",verticalAlign:"middle"}} src="img/logos2/logo14.png" alt="Brands" /></a></div>

          {
            // this.state.dataAll.testimonials.map((da, i) => {
            //   da.id = id + i;
            //   return <div key={id} className="testimonial bg-dr-2 gradient" style={{ margin: " 0 30px -50px 30px" }}  >
            //     <div className="testi-content" >
            //       <p> {da.quote.trim()} </p>
            //       <div className="testi-meta">
            //         {da.author}
            //       </div>
            //     </div>

            //   </div>

            // })

          }
        </Carousel>
                        
                
    </div>
    );
  }
}




const Section3Page = (a) => {
  const { data } = a;
  const { markdownRemark } = data;





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
      description
      description1
    }
  }
}

`