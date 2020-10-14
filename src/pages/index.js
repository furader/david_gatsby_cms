import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'



import { Section1Template } from '../templates/section1-page'

import { Section2Template } from '../templates/section2-page'
import { Section3Template } from '../templates/section3-page'
import { Section4Template } from '../templates/section4-page'
import  Layout from '../components/Layout'
import  Content from '../components/Content'
import Header from '../components/Header';



/*
 





*/




const IndexPage = (a) => {
  const { data } = a;
  const section1 = data.section1;
  const section2 = data.section2;
  const section3 = data.section3;
  const section4 = data.section4;

  return   <Layout >
    <Section1Template
      {...section1.frontmatter}
    />
    <Content>
    <Section2Template {...section2.frontmatter} />
    <Section3Template {...section3.frontmatter} />
    <Section4Template {...section4.frontmatter}/>
    </Content>
    </Layout>
  



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
        visible
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

/*


            ...GatsbyImageSharpFluid_withWebp

            */