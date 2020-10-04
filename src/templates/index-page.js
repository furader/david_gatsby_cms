import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'



export const IndexPageTemplate = ({ classes, content, title, colour }) => {

  return <div className="container clearfix">
      <div className={classes} >
          <h1>{title}</h1>

      </div>
      <div style={{ color: colour }}>
          {content}
      </div>

  </div>
}




const IndexPage = ({data}) => {
  var allFront = data.allMarkdownRemark.nodes[0].frontmatter;
  var colour = allFront.colour;
  var cont = data.allMarkdownRemark.nodes[0].internal.content;
  var speClass = allFront.classes;
  return <IndexPageTemplate classes={speClass} content={cont} title={allFront.title} colour={colour}/>;

}
export default IndexPage

export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "sections"}}}) {
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
        }
      }
}

`