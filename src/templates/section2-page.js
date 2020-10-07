import React from 'react'
import { graphql } from 'gatsby'
import './all_css/style.css'
import './all_css/css/custom.css'
import './all_css/css/resume.css'
import './all_css/css/resume_fonts.css'
import im from '../../static/img/coffee.png'
/*



    <img className="section1Background" src="/img/coffee.png" alt="jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj" />
       
    */

export const Section2Template = ({ idd1, idd2, classes, content, title, colour, imageData }) => {



  return <section  className="nobg" 
  style={{background:"background: url('/static/img/coffee.png') no-repeat top center",
backgroundSize:"cover", backgroundAttachment:"fixed",width:"100%"}}
  >     <div className="content-wrap nobottompadding nobg">
              <div id={`section-skills`} className="section nomargin page-section dark nobg clearfix" style={{paddingBottom:"50px"}} >
                <div className="container clearfix">

                  <div className="row clearfix">
                    <div className="col-md-5 clearfix">
                      <div>
                        <h2 className="font-primary ls5" data-animate="fadeIn" style={{color:"#303030", fontSize:"2.5rem", fontWeight:"700" }}
                        >KEYNOTE TALKS  EVENT MODERATION</h2>
                          <p data-animate="fadeIn" data-delay="400" style={{color:"#404040", fontSize:"0.875rem", fontWeight:"500" }}> David Rowan is in international demand as a keynote speaker, event host and moderator, after-dinner speaker and webinar presenter. He travels frequently, and has a home studio at his London base for online presentations and moderating. His current keynote topics include:</p>
                          <a data-animate="fadeIn" data-delay="400" className="team" data-toggle="modal" data-target=".bs-example-modal-lg2">
                            <button className="bottommargin button button-large button-border button-white button-dark noleftmargin">See all speaking topics here</button></a>
                    </div>
                        <div data-animate="fadeIn" data-delay="800">
                          <p style={{marginRight:"40px",color:"#303030",fontSize:"0875",fontWeight:"500"}}>
                            <strong>EVENT MODERATING: </strong>David has moderated events for the UK and French governments; World Economic Forum; Royal Academy of Engineering; Pictet</p>
                          <a href="mailto:web@davidrowan.com" className="button button-large button-border button-white button-dark noleftmargin"> Book David for your event</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
        </section>
}




const Section2Page = ({data}) => {
  const {markdownRemark} = data;

  var allFront = markdownRemark.frontmatter;
  var colour = allFront.colour;
  var cont = markdownRemark.internal.content;
  var speClass = allFront.classes;



  return <Section2Template classes={speClass} content={cont} title={allFront.title} colour={colour} />;

}
export default Section2Page

export const pageQuery = graphql`
query {
      markdownRemark(frontmatter: {identifier: {eq: "section1"}}) {

      frontmatter {
      title
            category
            classes
            description
            colour
          }
          internal {
      content
    }
        }
        image: file(relativePath: {eq: "DR1_edit.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
      ...GatsbyImageSharpFluid_withWebp
    }
          }
        }
      
}

`