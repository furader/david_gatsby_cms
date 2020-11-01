import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery,graphql } from 'gatsby'

import   Section1Page  from '../templates/section1-page'
import Section2Page from '../templates/section2-page'
import Section3Page from '../templates/section3-page'
import Section4Page from '../templates/section4-page'
import Section5Page from '../templates/section5-page'
import Section6Page from '../templates/section6-page'
import  Layout from '../components/Layout'
import  Content from '../components/Content'
import Header from '../components/Header';
import { deviceDetect } from 'react-device-detect'



/*
 





*/




export default class IndexPage extends React.Component{


  constructor (a){
    super(a);
      this.state  ={
        data: [
          <Section1Page id={`first`} dec={this.backgroundLoaded}
    />
        ]
      }
  }
   backgroundLoaded = async () => {
    console.log("section 1 says it has loaded");
    var t = this.state.data;

    t.push(<Content >
      <Section2Page />
    <Section3Page
      /><Section4Page
      />
       <Section5Page
     />
   <Section6Page 
   />
     
    

      </Content>);
   this.setState({
     data: t
   })
  }
  render = ()=>{


    return   <Layout >
   
   {
     this.state.data.map((d,i)=>{

      return d;
     })
   }
    
    {/* {<Section3Page
     /><Section4Page
     />
  <Section6Page 
  />
    <Section2Template {...section2.frontmatter} />
    <Section3Template {...section3.frontmatter} />
    <Section4Template {...section4.frontmatter}/>
    <Section6Template {...section6.frontmatter}/> */
  }

    </Layout>
  



}
  }


  // const { data } = a;
  // const section1 = data.section1;
  // const section2 = data.section2;
  // const section3 = data.section3;
  // const section4 = data.section4;
  // const section6 = data.section6;
 
//...GatsbyImageSharpFluid_withWebp_noBase64
            //...GatsbyImageSharpFluid
// export const pageQuery = graphql`
// query {
 
  
 
//   section1:  markdownRemark(frontmatter: {identifier: {eq: "section1"}}) {
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
//   section2: markdownRemark(frontmatter: {identifier: {eq: "section2"}}) {
//     frontmatter {
//       title
//       templateKey
//       identifier
//       testimonials {
//         author
//         quote
//       } 
//       videos {
//         location
//         source
//         visible
//         thumbnail{
//           childImageSharp {
//             fluid (maxWidth: 3000,quality: 100){
//               ...GatsbyImageSharpFluid_withWebp_noBase64
//             }
//           }
//         }
//         video_title
//       }
//     }
//   }
//   section3:  markdownRemark(frontmatter: {identifier: {eq: "section3"}}) {
//     frontmatter {
//       title
//       templateKey
//       identifier
//       description
//       description1
//     }
//   }
//   section4:  markdownRemark(frontmatter: {identifier: {eq: "section4"}}) {
//     frontmatter {
//       title
//       description
//       link_full_bio
//       background_image {
//         childImageSharp {
//           fluid (maxWidth: 3000,quality: 100){
//             ...GatsbyImageSharpFluid_withWebp_noBase64
//           }
//         }
//       }
//     }
//   }
//   section6:  markdownRemark(frontmatter: {identifier: {eq: "section6"}}) {
//     frontmatter {
//       title
//       investments {
//        link
//        thumbnail{       
//         id
//         path:    absolutePath
//         relativePath
//         relativeDirectory
//       }
//        name
//        location        
//       }
//     }
//   }
// }
// `

/*


            ...GatsbyImageSharpFluid_withWebp

            */