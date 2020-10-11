import React from 'react'
import { Section2Template } from '../../templates/section2-page'
import PropTypes from 'prop-types'
import { Section1Template } from '../../templates/section1-page'
import { graphql, useStaticQuery } from 'gatsby'
import { Spring } from 'react-spring/renderprops'
import './../../templates/all_css/style.css'
import './../../templates/all_css/css/custom.css'
import './../../templates/all_css/css/resume.css'
import './../../templates/all_css/css/resume_fonts.css'

import './../../templates/all_css/css/bootstrap.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile, isTablet
} from "react-device-detect";

const Section2Preview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();




  if (data) {
 return  <Section2Template  {...data} />
    
  } else {
    return <div>Loading...</div>
  }
}



export default Section2Preview
