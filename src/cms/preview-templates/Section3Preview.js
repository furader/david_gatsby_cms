import React from 'react'
import { Section3Template } from '../../templates/section3-page'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring/renderprops'
import './../../templates/all_css/style.css'
import './../../templates/all_css/css/custom.css'
import './../../templates/all_css/css/resume.css'
import './../../templates/all_css/css/resume_fonts.css'

import './../../templates/all_css/css/bootstrap.css'

  import Carousel from 'react-multi-carousel';
  import { VideoModal } from '../../components/VideoModal'
  //import { MyVideos } from '../components/VideoModal'
  import 'react-multi-carousel/lib/styles.css';
  
  import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile, isTablet
  } from "react-device-detect";
  
  
  
 // export default class Section3Preview extends React.Component {
  
    // constructor(a) { 
    //   const { entry, getAsset } = a;
    //      const data = entry.getIn(['data']).toJS();
    //      this.state = {
    //        data: data
    //       };
    // }
    
  //   render(){
      

  //     return  <Section3Template {...this.state.data} />
  //   }
  // }
  
const  Section3Preview =  (a) =>{
    const { entry, getAsset } = a;
          const data = entry.getIn(['data']).toJS(); 
          this.forceUpdate();

    return(
        <Section3Template {...data} />

    )
  }
  export default Section3Preview