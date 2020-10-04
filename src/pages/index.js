import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import {AboutPageTemplate} from '../templates/about-page'
import {IndexPageTemplate} from '../templates/index-page'



// export const IndexPageTemplate = ({ classes, content, front }) => {

//   return <div className="container clearfix">
//       <div className={classes} >
//           <h1>{front.title}</h1>

//       </div>
//       <div style={{ color: "red" }}>
//           {content}
//       </div>

//   </div>
// }



    

const IndexPage =  ({data}) => {
  var allFront = data.allMarkdownRemark.nodes[0].frontmatter;
  var cont = data.allMarkdownRemark.nodes[0].internal.content;
  var speClass = allFront.classes;
  var colour = allFront.colour;
  //const allAbout = await aboutPageQuery();
const abData = data.markdownRemark;

  return <div> <IndexPageTemplate classes={speClass} content={cont} title={allFront.title} colour={colour}/>;
<AboutPageTemplate 
classes={abData.frontmatter.classes} 
content={abData.internal.content} 
title={abData.frontmatter.title} 
colour={abData.frontmatter.colour}
/>

</div>

}
export default IndexPage

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "new tiiitle"}}}) {
    nodes {
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
      fileAbsolutePath
    }
  }
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