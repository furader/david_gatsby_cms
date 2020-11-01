import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import Img from 'gatsby-image'
import './../../static/all_css/style.css'
import './../../static/all_css/css/custom.css'
import './../../static/all_css/css/resume.css'
import './../../static/all_css/css/resume_fonts.css'
import './../../static/all_css/css/bootstrap.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Image } from "semantic-ui-react";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile, isTablet
} from "react-device-detect";


export class Section6Template extends React.Component {

  constructor(a){
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
      },
      tablet: {
        breakpoint: { max: 900, min: 464 },
        items: 4
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
      }
    };
    super(a);
    this.state = {
      data:a,
      responsive: responsive
    }

  }
 componentWillReceiveProps(data){
    //"?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
    this.setState({
      data:data
       
    });
   }
   /*


   <Img key={i}
                draggable={false}
                fluid={imageData}
                
                />
                 <div className="d-flex justify-content-center flex-wrap">
                */

  // <img src="img/DR3_2.jpg" alt="story-image" />
  render(){
    
    return <section className="container-fluid" style={{background:"#FFFFFF"}}>
       <h3 className="center dr-heading">{this.state.data.title}</h3>
     <Carousel responsive={this.state.responsive}
            showDots={false}
            responsive={this.state.responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            // customTransition="all 150"
            transitionDuration={700}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={isMobile === true ? "mobile" : isTablet === true ? "tablet" : "desktop"}
            itemclassName="carousel-item-padding-40-px"
          >
        {this.state.data.investments.map((da, i) => {
          //console.log("from Image ****************************************************");
         // console.log(da.thumbnail.path)
       //   console.log("from Image ****************************************************");
         // const imageData = da.thumbnail.childImageSharp.fluid;
          return (
          
          
          <div key={i} className="caroCard"  >
                <a href={da.link} style={{padding:"0", margin:"0", width:"100%", height:"100%"}}
                target="_blank" >
            <div className="caroImageContainer">
              
                <Image 
                draggable={false}
                src={"/img/" + da.thumbnail.relativePath}
              />
            </div>
            <div className="caroDescriptionContainer">
              <div>
                {da.name}
              </div>
              <div>
                {da.location}
              </div>
            </div>
            </a>
          </div>
          
          );
        })}
        
        </Carousel>
    </section>

  }
}




const Section6Page = (a) => {
  const { section6 } = useStaticQuery(
    graphql`
      query {
        section6:  markdownRemark(frontmatter: {identifier: {eq: "section6"}}) {
               frontmatter {
                 title
                 investments {
                  link
                  thumbnail{       
                   id
                   path:    absolutePath
                   relativePath
                   relativeDirectory
                 }
                  name
                  location        
                 }
               }
             }
              }
    `
  )


  return <Section6Template {...section6.frontmatter} />;

}
export default Section6Page

// export const pageQuery = graphql`
// query {
//   markdownRemark(frontmatter: {identifier: {eq: "section6"}}) {
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