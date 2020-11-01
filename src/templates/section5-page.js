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
    console.log(this.props);
    console.log("device type");
    console.log(deviceType);
    var ke = "article";
    //<img src="/img/DR2_edit_6.png" alt="story-image"/>
    const imageData = !this.props.forPreview ? this.props.background_image.childImageSharp.fluid : this.props.background_image;
    const im = !this.props.forPreview ?  <Img fluid={imageData} /> : <img src={imageData} alt="story" />
    return (    	<div id="section-about" style={{marginBottom:"0"}} className="section topmargin-lg clearfix bg-dr-2 gradient">

    <div className="divcenter" style={{maxWidth:"960px"}}>
      <div className="tabs tabs-alt tabs-responsive tabs-justify clearfix" id="tab">

        <div className="tab-container">
          <div className="tab-content bottommargin clearfix" id="tabs-2">
            <div className="story-box clearfix">
              <div data-animate="fadeInLeft" data-delay="400" className="story-box-image">
                {im}
              </div>
              <div data-animate="fadeInRight" data-delay="400" className="story-box-info">
  <h3 className="story-title dr-heading"  >{this.props.title}</h3>
                <div className="story-box-content">
                  <p>
                    <ul  style={{marginLeft:"30px", textDecoration:"none", fontWeight:"300"}}>
                      
                      {
                        this.props.articles.map((article,i)=>{

                        return <li key={article + i}> <a target="_blank" style={{color:"#333", fontSize:"15px",fontWeight:"300"}}  href={article.link}>{article.text}</a></li>
                        
                        })
                      }
                       </ul>
                  </p>
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
        section4:  markdownRemark(frontmatter: {identifier: {eq: "section5"}}) {
               frontmatter {
                 title
                 description
                 articles {
                  link
                  text
                 }                 
                 background_image {
                   childImageSharp {
                     fluid (maxWidth: 3000,quality: 100){
                       ...GatsbyImageSharpFluid_withWebp
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