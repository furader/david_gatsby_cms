import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import Img from 'gatsby-image'
import './../../static/all_css/style.css'
import './../../static/all_css/css/custom.css'
import './../../static/all_css/css/resume.css'
import './../../static/all_css/css/resume_fonts.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile, isTablet,deviceType
} from "react-device-detect";

import './../../static/all_css/css/bootstrap.css'


export class Section4Template extends React.Component {

 

  // <img src="img/DR3_2.jpg" alt="story-image" />
  render(){
    console.log("device type");
    console.log(deviceType);
    const imageData = !this.props.forPreview ? this.props.background_image.childImageSharp.fluid : this.props.background_image;
    const im = !this.props.forPreview ?  <Img fluid={imageData} /> : <img src={imageData} alt="story" />
    return (        <div id={`section-about`} className="container topmargin-lg clearfix">

    <div className="divcenter" style={{maxWidth:"960px"}} >
      <div className="tabs tabs-alt tabs-responsive tabs-justify clearfix" id="tab">

        <div className="tab-container">

          <div className="tab-content bottommargin clearfix" id="tabs-1">
            <div className="story-box description-left clearfix">
              <div data-animate="fadeInRight" data-delay="400" className="story-box-image">
               {im}
                
              </div>
              <div data-animate="fadeInLeft" data-delay="600" className="story-box-info">
  <h3 className="story-title dr-heading">{this.props.title}</h3>
                <div className="story-box-content">
  <p>{this.props.description}</p>
                  <a className="team" data-toggle="modal" data-target=".bs-example-modal-lg4">
                    <button className="button button-large button-border button-white button-dark noleftmargin">
  {this.props.link_full_bio}</button></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
    );
  }
}




const Section4Page = (a) => {
  const { section4 } = useStaticQuery(
    graphql`
      query {
        section4:  markdownRemark(frontmatter: {identifier: {eq: "section4"}}) {
               frontmatter {
                 title
                 description
                 link_full_bio
                 background_image {
                   childImageSharp {
                     fluid (maxWidth: 3000,quality: 100){
                       ...GatsbyImageSharpFluid_withWebp_noBase64
                     }
                   }
                 }
               }
             }
              }
    `
  )






  return <Section4Template {...section4.frontmatter} />;

}
export default Section4Page

// export const pageQuery = graphql`
// query {
//   markdownRemark(frontmatter: {identifier: {eq: "section4"}}) {
//     frontmatter {
//       title
//       description
//       link_full_bio
//       background_image {
//         childImageSharp {
//           fluid (maxWidth: 3000,quality: 100){
//             ...GatsbyImageSharpFluid_withWebp_noBase64
//           }
//         }
//       }
//     }
//   }
// }

// `