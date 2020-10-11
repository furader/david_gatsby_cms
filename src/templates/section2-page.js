import React from 'react'
import { graphql } from 'gatsby'
import './all_css/style.css'
import './all_css/css/custom.css'
import './all_css/css/resume.css'
import './all_css/css/resume_fonts.css'
import Carousel from 'react-multi-carousel';
import { VideoModal } from '../components/VideoModal'
//import { MyVideos } from '../components/VideoModal'
import 'react-multi-carousel/lib/styles.css';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile, isTablet
} from "react-device-detect";

import './all_css/css/bootstrap.css'


export class Section2Template extends React.Component {

  constructor(data) {
    super(data);
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
    this.state = {
      source: "",
      ext: "?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
      isClosed: true,
      dataAll: data,
      responsive: responsive
    }
    
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
    return <section id={`content`} className="bg-dr">

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
            this.state.dataAll.testimonials.map(da => {

              return <div className="testimonial bg-dr-2 gradient" style={{ margin: " 0 30px -50px 30px" }}  >
                <div className="testi-content" >
                  <p> {da.quote.trim()} </p>
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
  }
}


/*
<MyVideos {...this.state.dataAll.videos} />
<button id={`mainBtnId`}
           type="button" class="btn btn-primary video-btn"
            data-toggle="modal"
            data-backdrop="static" data-keyboard="false"
            onClick={this.modalClosingick}
            data-target="#videoModal">
            Play Video 1 - autoplay
      </button>
          
 <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModal" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <div>
                  <iframe width="100%" height="350" src=""></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        */

const Section2Page = (a) => {
  const { data } = a;
  const { markdownRemark } = data;





  return <Section2Template {...data.markdownRemark.frontmatter} />;

}
export default Section2Page

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: {identifier: {eq: "section2"}}) {
    frontmatter {
      title
      templateKey
      identifier
      testimonials {
        author
        quote
      } 
      videos {
        location
        source
        thumbnail{
          childImageSharp {
            fluid (maxWidth: 3000,quality: 100){
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        video_title
      }
    }
  }
}

`