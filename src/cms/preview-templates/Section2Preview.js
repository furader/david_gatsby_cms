import React from 'react'
import { Section2Template } from '../../templates/section2-page'
import PropTypes from 'prop-types'
import { Section1Template } from '../../templates/section1-page'
import { Spring } from 'react-spring/renderprops'
import './../../../static/all_css/style.css'
import './../../../static/all_css/css/custom.css'
import './../../../static/all_css/css/resume.css'
import './../../../static/all_css/css/resume_fonts.css'

import './../../../static/all_css/css/bootstrap.css'
import TemplateWrapper from './../../components/Layout'


  import Carousel from 'react-multi-carousel';
  import { VideoModal } from './../../components/VideoModal'
  //import { MyVideos } from '../components/VideoModal'
  import 'react-multi-carousel/lib/styles.css';
  
  import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile, isTablet
  } from "react-device-detect";
  
  
  
  export default class Section2Preview extends React.Component {
  
    constructor(a) {
      super(a);
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 900, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
        const { entry, getAsset } = a;
         const data = entry.getIn(['data']).toJS();
         data.forPreview = true;
         console.log("new data section2Preview");
         console.log(data);
       
      this.state = {
        source: "",
        ext: "?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
        isClosed: true,
        dataAll: data,
        responsive: responsive
      }
     // this.forceUpdate();
    }
    componentWillReceiveProps(n){
      const da = n.entry.getIn(['data']).toJS();
      da.forPreview = true;
      this.setState({
        dataAll: da
      });
     }
    closeModal = () =>{
      console.log("close modal");
      this.setState({
        source: ""
      });
    }
    openModal = (sr) => {
      console.log("open modal");
      this.setState({
        source: sr
      });
      this.forceUpdate();
    }
    
    render() {
      console.log(this.state)
      const id = `videoModalId`;
  const pas = this.openModal;
  const forPreview = this.state.dataAll.forPreview === true ? true: false;
      return <TemplateWrapper >
      <section id={`content`} className="bg-dr">
  
        <div id={`section-testimonials`} className="content-wrap bg-dr" style={{ display: "block" }}>
          <h3 className="center dr-heading myCaroTitle">{this.state.dataAll.title}</h3>
          <Carousel responsive={this.state.responsive}
            showDots={true}
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
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
          >
            {
              this.state.dataAll.testimonials.map((da,i) => {
  
                return <div key={i} className="testimonial bg-dr-2 gradient" style={{ margin: " 0 30px -50px 30px" }}  >
                  <div className="testi-content" >
                    <p> {!da.quote ? "" : da.quote.trim()} </p>
                    <div className="testi-meta">
                      {da.author}
                    </div>
                  </div>
  
                </div>
  
              })
  
            }
          </Carousel>
        </div>
        <div id={`section-videos`} className="content-wrap bg-dr bottommargin bottompadding">
        <div className="portfolio portfolio-5 portfolio-full portfolio-notitle clearfix videoContainer" >
            
              {
              this.state.dataAll.videos.map(function(vid, i){
              vid.id = id + i;
              vid.openMe = pas;
              vid.forPreview = forPreview;
              console.log("from 2 preview");
              console.log(vid.forPreview);
              return <VideoModal {...vid}/> 
              })
                }
  
    
    <div className="modal fade" id={`videoModal`} role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header bg-dark border-dark">
          <button type="button" className="close text-white" onClick={this.closeModal}
            data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body bg-dark p-0">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="embed-responsive-item"
              src={this.state.source} //{this.props.isClosed === true ? "" : this.props.source + ext}
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  
            
          </div>
        </div>
      </section>
      </TemplateWrapper>
    }
  }
  