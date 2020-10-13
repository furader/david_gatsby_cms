import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'



import { Section1Template } from '../templates/section1-page'

import { Section2Template } from '../templates/section2-page'
import { Section3Template } from '../templates/section3-page'
import Header from '../components/Header';



/*
 





*/




const IndexPage = (a) => {
  const { data } = a;
  const section1 = data.section1;
  const section2 = data.section2;
  const section3 = data.section3;

  return <>
    <Section1Template
      {...section1.frontmatter}
    />
    <Section2Template {...section2.frontmatter} />
    <Section3Template {...section3.frontmatter} />
    
  </>



}
export default IndexPage

export const pageQuery = graphql`
query {
 
  
 
  section1:  markdownRemark(frontmatter: {identifier: {eq: "section1"}}) {
    frontmatter {
      background_image {
        childImageSharp {
          fluid (maxWidth: 3000,quality: 100){
            ...GatsbyImageSharpFluid_withWebp_noBase64
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
  section2: markdownRemark(frontmatter: {identifier: {eq: "section2"}}) {
    frontmatter {
      title
      templateKey
      identifier
      testimonials {
        author
        quote
      } 
      videos {
        location
        source
        thumbnail{
          childImageSharp {
            fluid (maxWidth: 3000,quality: 100){
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        video_title
      }
    }
  }
  section3:  markdownRemark(frontmatter: {identifier: {eq: "section3"}}) {
    frontmatter {
      title
      templateKey
      identifier
      description
      description1
    }
  }
}
`

/*


            ...GatsbyImageSharpFluid_withWebp

            */