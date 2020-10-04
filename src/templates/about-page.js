import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ classes, content, title, colour }) => {
  

  return <div className="container clearfix">
   <div className={classes} >
     <h1>{title}</h1>

  <div style={{ color: colour }}>
      {content}
  </div>

</div> 
</div>
}



const AboutPage = ({data}) => { 
 console.log(data);
 const { markdownRemark} = data;
 
  var allFront = markdownRemark.frontmatter;
  var colour = allFront.colour;
  var cont = markdownRemark.internal.content;
  var speClass = allFront.classes;
  return (
      <AboutPageTemplate 
       classes={speClass} content={cont} title={allFront.title} colour={colour}
      />
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query  {
    markdownRemark(frontmatter: {title: {eq: "The about title"}}) {
      id
      frontmatter {
        category
        classes
        colour
        date
        description
        templateKey
        title
      }
      internal {
        content
      }
    }
  }
`
