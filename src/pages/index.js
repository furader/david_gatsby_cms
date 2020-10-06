import React from 'react'
import PropTypes from 'prop-types'
import {  graphql } from 'gatsby'



import { Section1Template } from '../templates/section1-page'

import { Section2Template } from '../templates/section2-page'








const IndexPage = ({ data }) => {
  
  const section1 = data.section1;

  return   <div  className="myWrapper">
  <Section1Template
  {...section1.frontmatter}
  />

<Section2Template />

</div>


}
export default IndexPage

export const pageQuery = graphql`
query {
 
  
 
  section1:  markdownRemark(frontmatter: {identifier: {eq: "section1"}}) {
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
    }
  }
}
`