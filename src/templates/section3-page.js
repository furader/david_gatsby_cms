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

  constructor(data){
    super(data);
this.state = {
  counter: 1
};
this.doClick = this.doClick.bind(this);
  }

  doClick = ()=>{
      console.log("button clicked");
      this.setState({
        counter: this.state.counter + 1
      });
      this.forceUpdate();
  }

  render(){

    return ( <section className="container nobg" style={{position:"absolute"}}>
      <button id={`btnId`} onClick={this.doClick}>kkk</button>
    <div>{this.state.counter}kkkkkkkkkkkkkkllllllllllllllllllllllll</div>
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
      testimonials {
          author
        quote
      }
    }
  }
}

`