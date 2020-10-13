import React from 'react'
import { graphql } from 'gatsby'
import './all_css/style.css'
import './all_css/css/custom.css'
import './all_css/css/resume.css'
import './all_css/css/resume_fonts.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile, isTablet
} from "react-device-detect";

import './all_css/css/bootstrap.css'


export class Section3Template extends React.Component {

  constructor(a){
    super(a);
this.state = a;
console.log("from section 3:");
console.log(a.title);
this.forceUpdate();  
}
  

  doClick = ()=>{
      console.log("button clicked");
      this.setState({
        counter: this.state.counter + 1
      });
  }

  render(){

    return ( <section className="content-wrap  "  >
     <div className="row" style={{margin:0,padding:0, display:"flex",height:"10vh", justifyContent:"center"}}>
     <h1>  {this.state.title}</h1>
     </div>
     <div className="row ">
       <div className="col bg-success" style={{alignItems:"center",borderRadius:"100px",margin:0,padding:0, display:"flex",height:"20vh", justifyContent:"center"}}>
       {this.state.description}
       </div>
       <div className="col bg-success" style={{alignItems:"center",borderRadius:"100px",margin:0,padding:0, display:"flex",height:"20vh", justifyContent:"center"}}>
       {this.state.description1}
       </div>
     </div>
     <div id={`gotoTop`} className="icon-angle-up"></div>
    </section>
    );
  }
}




const Section3Page = (a) => {
  const {data} = a;
  const {markdownRemark} = data;





  return <Section3Template {...data.markdownRemark.frontmatter} />;

}
export default Section3Page

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: {identifier: {eq: "section3"}}) {
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