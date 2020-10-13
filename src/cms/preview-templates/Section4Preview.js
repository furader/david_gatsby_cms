import React from 'react'
import { Section4Template } from '../../templates/section4-page'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring/renderprops'
import './../../templates/all_css/style.css'
import './../../templates/all_css/css/custom.css'
import './../../templates/all_css/css/resume.css'
import './../../templates/all_css/css/resume_fonts.css'
import './../../templates/all_css/css/font-icons.css'

import './../../templates/all_css/css/dark.css'
import './../../templates/all_css/css/interior_fonts.css'
import './../../templates/all_css/css/interior-design.css'

// import './../../templates/all_css/css/animate.css'
// import './../../templates/all_css/css/magnific-popup.css'
// import './../../templates/all_css/css/responsive.css'

/*


	<link rel="stylesheet" href="css/animate.css" type="text/css" />
	<link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />

	<link rel="stylesheet" href="css/responsive.css" type="text/css" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="stylesheet" href="css/colors.php?color=7B6ED6" type="text/css" />
	<link rel="stylesheet" href="css/custom.css" type="text/css" />
*/

 
//"css/font-icons.css"

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
  
  
  
   class Section4Preview extends React.Component {
  
     constructor(a) { 
       super(a);
       const { entry, getAsset } = a;
          const da = entry.getIn(['data']).toJS();
          da.forPreview = true;
          this.state = da;
          console.log("preview 4 is updating");
     }
     componentDidUpdate = (b)=>{
      

     }
     componentWillReceiveProps(n){
      const da = n.entry.getIn(['data']).toJS();
      this.setState(da);
     }
     render = ()=>{
     // const data = this.props.entry.getIn(['data']).toJS();
      return (
        <Section4Template {...this.state} />
      )

     }
   }
  
  export default Section4Preview