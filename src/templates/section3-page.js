import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
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
    console.log(this.props);
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
        items: 3
      }
    };
    this.state = {
      responsive: responsive,
      data: a,
      forPreview: !a.forPreview ? false:true
    }
  }


  render() {
    var ke = "log";
    return (<div id="section-logos" className="section footer-stick notopmargin bg-dr-2 gradient">
      <h3 className="center dr-heading">{this.props.title}</h3>
      <Carousel responsive={this.state.responsive}
        showDots={false}
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
        {
         
          this.props.logos.map((log,i)=>{
console.log(log);
            return <div key={ke + i} className="oc-item text-center">
            <a href="#"><img style={{ maxHeight: "60px", width: "auto", verticalAlign: "middle" }}
              src={!this.state.forPreview?log.logo.childImageSharp.fluid.src : log.logo} alt="Brands" /> </a>
          </div>
          })
        
  }
      </Carousel>


    </div>
    );
  }
}




const Section3Page = (a) => {
  const { section3 } = useStaticQuery(
    graphql`
      query {
        section3:  markdownRemark(frontmatter: {identifier: {eq: "section3"}}) {
               frontmatter {
                 title
                 templateKey
                 identifier
                 description
                 description1
                 logos{
                   logo{
                      childImageSharp {
                        fluid (maxWidth: 400,quality: 100){
                          ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                    }
                }
               }
             }
      }
    `
  )










  return <Section3Template {...section3.frontmatter} />;

}
export default Section3Page

// export const pageQuery = graphql`
// query {
//                                   markdownRemark(frontmatter: {identifier: {eq: "section3"}}) {
//                                   frontmatter {
//                                   title
//       templateKey
//       identifier
//       description
//       description1
//     }
//   }
// }

// `