import React from 'react';
import Img from 'gatsby-image'



export class VideoModal extends React.Component {

  constructor(data) {
    super(data);
    this.state = {
      source: data.source + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
      ext: "?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
      isClosed: true,
      location: data.location,
      thumbnail: data.thumbnail,
      video_title: data.video_title
    };

    console.log(this.state)
  }

  modalClosingick = () => {
    console.log("button clicked");
    this.setState({
      isClosed: !this.state.isClosed
    });
    this.forceUpdate();
  }

  render() {
    const imageData = this.state.thumbnail.childImageSharp.fluid;
    return       <article className="portfolio-item pf-graphics pf-uielements" data-animate="fadeIn">
        <div className="portfolio-image">
          <a href="#">

            <Img fluid={imageData} />
          </a>
          <div className="portfolio-overlay">
            <a href="#" className="left-icon" data-toggle="modal"
              onClick={() =>{              
                this.props.openMe(this.state.source)
              }}
              data-target={`#videoModal`}
              data-backdrop="static" data-keyboard="false"
            ><i className="icon-line-play"></i> </a>
            <a href="portfolio-single-video.html" className="right-icon">
              <i className="icon-line-ellipsis"></i></a>
          </div>
        </div>
        <div className="portfolio-desc">
          <h3><a href="portfolio-single-video.html">{this.state.video_title}</a></h3>
          <span><a href="#"></a><a href="#">{this.state.location}</a></span>
        </div>
       
      </article>



  }
}

// export default  MyVideos = (a) => {
//   const id = `videoModalId`;

//   a.map(function (t, i) {
//     t.id = id + i;
//     return <VideoModal {...a} />
//   });

//}

/*


  <img src="img/video-grid-1.png" alt="Non Bullshit Innovation" />

*/