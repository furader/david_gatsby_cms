import React from 'react'
import { Section5Template } from '../../templates/section5-page'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring/renderprops'
import './../../../static/all_css/style.css'
import './../../../static/all_css/css/custom.css'
import './../../../static/all_css/css/resume.css'
import './../../../static/all_css/css/resume_fonts.css'

import './../../../static/all_css/css/bootstrap.css'
import './../../../static/all_css/css/font-icons.css'

import './../../../static/all_css/css/dark.css'
import './../../../static/all_css/css/interior_fonts.css'
import './../../../static/all_css/css/interior-design.css'

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
  
  
const  Section3Preview =  (a) =>{
    const { entry, getAsset } = a;
          const data = entry.getIn(['data']).toJS(); 
          data.forPreview  = true;
          console.log(data)

    return(
        <Section5Template {...data} />

    )
  }
  export default Section3Preview