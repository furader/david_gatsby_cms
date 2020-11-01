import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { Spring } from 'react-spring/renderprops'
import Header from '../components/Header';import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile, isTablet
} from "react-device-detect";

import { useStaticQuery,graphql } from 'gatsby'
// import './all_css/style.css'
// import './all_css/css/custom.css'
// import './all_css/css/resume.css'
// import './all_css/css/resume_fonts.css'

import './../../static/all_css/style.css'
import './../../static/all_css/css/custom.css'
import './../../static/all_css/css/resume.css'
import './../../static/all_css/css/resume_fonts.css'
//import './all_css/css/colors.php?color=7B6ED6'   style={{ height: "100vh" }}
/*
<BackgroundImage
        Tag="section"
        fixed={imageData}
        className="section1Background"
        backgroundColor={`#040e18`}
        loading="eager"

      >*/

export const Section1Template =  (data) => {
 //<img className="section1Background" src="/img/DR1_edit-min.jpg" alt="background image" />
const imageData = data.background_image.childImageSharp.fluid;
const id = "achivement";
  return  (   <div  className="myWrapper">
    <Header />
  < section id={`slider`} className="slider-element full-screen force-full-screen clearfix"
     style={{ height: "100vh" }}
    >
     <BackgroundImage
        Tag="section"
        fixed={imageData}
        className="section1Background"
        backgroundColor={`#040e18`}
        loading="eager"
        onLoad={data.dec
        }
      >

        <div  className="notopmargin full-screen force-full-screen gradient ">
          <div className="container clearfix"  style={{width:"100%", marginLeft:"auto",marginRight:"auto" }}>
            <div id={`mainText`} className="slider-caption dark slider-caption-left" style={{ top: "177.5px " }}>
              <h2 className="font-primary ls5" data-animate="fadeIn"
                style={{ color: "#303030" }} >{data.title}</h2>
              <Spring delay="500"
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              >
                {props =>(
                  <div key="89" style={props}>
                    <p key="81"  className="t300 ls1  d-sm-block" data-animate="fadeIn" data-delay="400"
                      style={{ color: "#303030" }}>{data.subtitle}</p>
                  </div>
                 ) }
              </Spring>
              <Spring delay="700"
                from={{ opacity: 0, marginTop: -200, marginLeft:100 }}
                to={{ opacity: 1, marginTop: 0, marginLeft:0 }}
              >
                {props =>(
                  <div key="82" style={props}>
              <a key="85" className="font-primary noborder ls1 topmargin-sm inline-block more-link text-white dark  d-sm-inline-block"
                data-animate="fadeIn" data-delay="800" data-scrollto="#section-works" data-offset="0">
                <ul key="92" style={{ marginLeft: "25px", fontSize: "1.1rem", color: "#333" }}>
                 {
                 
                 data.achievements.map((element,i) => {
                  const d = id + i;
                   return <li  key={d}>  {element.text}</li>
                 })}
                </ul>
              </a>
              </div>
              )} 

              </Spring>
              <Spring delay="1000"
                from={{ opacity: 0, marginTop: -200, marginLeft:100 }}
                to={{ opacity: 1, marginTop: 0, marginLeft:0 }}
              >
                   {props =>(
                  <div key="66"  style={props}>
              <a key="67"  data-animate="fadeIn" data-delay="1200" href="mailto:web@davidrowan.com"> <button
                className="button button-large button-border button-white button-dark noleftmargin">{data.booking}</button> </a>
                                </div>
                   )}
                                </Spring>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </section >
    <section id={`content`} className="nobg"  >
    <div className="content-wrap nobottompadding nobg">
      <div id={`section-skills`} className="section nomargin page-section dark nobg clearfix" style={{ paddingBottom: "50px" }} >
        <div className="container clearfix">

          <div className="row clearfix">
            <div className="col-md-5 clearfix">
              <div>
                <h2 className="font-primary ls5" data-animate="fadeIn" style={{ color: "#303030", fontSize: "2.5rem", fontWeight: "700" }}
                >{data.second_title}</h2>
                <p data-animate="fadeIn" data-delay="400" style={{ color: "#404040", fontSize: "0.875rem", fontWeight: "500" }}> 
                   {data.description1}</p>
                <a data-animate="fadeIn" data-delay="400" className="team" data-toggle="modal" data-target=".bs-example-modal-lg2">
                  <button className="bottommargin button button-large button-border button-white button-dark noleftmargin">
                  {data.speaking_topics_link}</button></a>
              </div>
              <div data-animate="fadeIn" data-delay="800">
                <p style={{ marginRight: "40px", color: "#303030", fontSize: "0875", fontWeight: "500" }}>
                  <strong>{data.strong_text}</strong>
                  {data.description2}</p>
                <a href="mailto:web@davidrowan.com" className="button button-large button-border button-white button-dark noleftmargin">{data.booking}</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  </div>
  )}

/*
<BackgroundImage
        Tag="section"
        fluid={imageData}
        className="section1Background blurred-img"
        backgroundColor={`#040e18`}
      >

      </BackgroundImage>
<li>Founding UK editor-in-chief, WIRED</li>
                  <li>600+ keynotes around the world</li>
                  <li>Adviser to  investor in 60+ tech startups</li>

image: file(relativePath: { eq: "DR1_edit.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }

*/


const Section1Page = (a) => {
  const { section1 } = useStaticQuery(
    graphql`
      query {
        section1:  markdownRemark(frontmatter: {identifier: {eq: "section1"}}) {
               frontmatter {
                 background_image {
                   childImageSharp {
                    fluid(maxWidth: 2500, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                   }
                 }
                 title
                 subtitle
                 identifier
                 category
                 booking
                 achievements {
                   text
                 }
                 second_title
                 description1
                 description2
                 speaking_topics_link
                 strong_text
          
               }
             }
      }
    `
  )
section1.frontmatter.dec = a.dec;
console.log(section1);


  return <Section1Template {...section1.frontmatter} />;

}
export default Section1Page
//    ...GatsbyImageSharpFluid_withWebp_noBase64
// 
/*
GatsbyImageSharpFixed
GatsbyImageSharpFixed_noBase64
GatsbyImageSharpFixed_tracedSVG
GatsbyImageSharpFixed_withWebp
GatsbyImageSharpFixed_withWebp_noBase64
GatsbyImageSharpFixed_withWebp_tracedSVG
Fluid images
GatsbyImageSharpFluid
GatsbyImageSharpFluid_noBase64
GatsbyImageSharpFluid_tracedSVG
GatsbyImageSharpFluid_withWebp
GatsbyImageSharpFluid_withWebp_noBase64

*/
// export const pageQuery = graphql`
// query {
//   markdownRemark(frontmatter: {identifier: {eq: "section1"}}) {
//     frontmatter {
//       background_image {
//         childImageSharp {
//           fluid (maxWidth: 3000,quality: 60){
//             ...GatsbyImageSharpFluid_withWebp_noBase64
//           }
//         }
//       }
//       title
//       subtitle
//       identifier
//       category
//       booking
//       achievements {
//         text
//       }
//       second_title
//       description1
//       description2
//       speaking_topics_link
//       strong_text

//     }
//   }
      
// }
// `

