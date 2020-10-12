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
  
  
  
   class Section3Preview extends React.Component {
  
     constructor(a) { 
       super(a);
       const { entry, getAsset } = a;
          const data = entry.getIn(['data']).toJS();
          this.state = data;
          console.log("preview 3 is updating");
          console.log(data.title);
          this.forceUpdate();
     }
    
     render = ()=>{
      
      return (
        <section className="content-wrap bg-info  "  >
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
    
    </section>
      )

     }
   }
  
// const  Section3Preview =  (a) =>{
//     const { entry, getAsset } = a;
//           const data = entry.getIn(['data']).toJS(); 
          

//     return(
//         <Section3Template {...data} />

//     )
//   }
  export default Section3Preview