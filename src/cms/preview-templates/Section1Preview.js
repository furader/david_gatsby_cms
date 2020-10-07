import React from 'react'
import PropTypes from 'prop-types'
import { Section1Template } from '../../templates/section1-page'
import { graphql, useStaticQuery } from 'gatsby'

 const Section1Preview = async({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  var t = entry.getIn(['data', 'background_image'])
  var im =  getAsset(entry.getIn(['data', 'background_image']));

  const nn = await useStaticQuery(graphql`
 query{ markdownRemark(frontmatter: {identifier: {eq: "section1"}}) {
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
  }}
     
  `)

  data.background_image = nn.markdownRemark.frontmatter.background_image;
  if (data) {
    return (
      <Section1Template
      {...data}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}



export default Section1Preview
