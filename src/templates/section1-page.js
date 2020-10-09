import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Spring } from 'react-spring/renderprops'
import './all_css/style.css'
import './all_css/css/custom.css'
import './all_css/css/resume.css'
import './all_css/css/resume_fonts.css'
//import './all_css/css/colors.php?color=7B6ED6'


export const Section1Template = (data) => {
  
//const data = all.frontmatter;
const imageData = data.background_image.childImageSharp.fluid;

  return  (   <div  className="myWrapper">
  < section id={`slider`} className="slider-element full-screen force-full-screen clearfix"
      style={{ height: "100vh" }}
    >
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className="section1Background"
        backgroundColor={`#040e18`}
      >

        <div className="notopmargin full-screen force-full-screen gradient ">
          <div className="container clearfix"  style={{width:"100%", marginLeft:"auto",marginRight:"auto" }}>
            <div className="slider-caption dark slider-caption-left" style={{ top: "177.5px" }}>
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
                 {data.achievements.map(element => {
                   return <li  >{element.text}</li>
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
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className="section1Background blurred-img"
        backgroundColor={`#040e18`}
      >

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
                <a href="mailto:web@davidrowan.com" className="button button-large button-border button-white button-dark noleftmargin"> Book David for your event</a>
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
const {data} = a;
  const { markdownRemark } = data;




  return <Section1Template {...data.markdownRemark.frontmatter} />;

}
export default Section1Page

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: {identifier: {eq: "section1"}}) {
    frontmatter {
      background_image {
        childImageSharp {
          fluid (maxWidth: 3000,quality: 100){
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

