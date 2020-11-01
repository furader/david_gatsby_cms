import React from 'react';
import Img from 'gatsby-image'



export class VideoModal extends React.Component {

  constructor(data) {
    super(data);
    this.state = {
      forPreview: data.forPreview,
      source: data.source + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
      ext: "?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
      isClosed: true,
      location: data.location,
      thumbnail: data.thumbnail,
      video_title: data.video_title,
      id: data.id
    };
  }

  modalClosingick = () => {
    console.log("button clicked");
    this.setState({
      isClosed: !this.state.isClosed
    });
  }
  componentWillReceiveProps(data){
    //"?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
    this.setState({
      
        forPreview: data.forPreview,
        source: data.source,
        isClosed: true,
        location: data.location,
        thumbnail: data.thumbnail,
        video_title: data.video_title,
        id: data.id
       
    });
   }
  render() {
    if(!this.state){
      return <div />
    }
    const tit = this.state.video_title;
    const forPreview = this.state.forPreview;
    var imageData;
    var holder;
    if(!this.state.thumbnail ){
      console.log("empppppppppppppppt");
      imageData=""; holder = !forPreview ?  <Img fluid={imageData} /> : <img src={imageData} alt={tit}></img>;
    }else{
      imageData = !forPreview ? this.state.thumbnail.childImageSharp.fluid : this.state.thumbnail;
     holder = !forPreview ?  <Img fluid={imageData} /> : <img src={imageData} alt={tit}></img>;
   
    }
      return       <article  className="portfolio-item pf-graphics pf-uielements" data-animate="fadeIn">
        <div className="portfolio-image">
          <a >
              { holder              }
          </a>
          <div className="portfolio-overlay">
            <a  className="left-icon" data-toggle="modal"
              onClick={() =>{              
                this.props.openMe(this.state.source)
              }}
              data-target={`#videoModal`}
              data-backdrop="static" data-keyboard="false"
            ><i className="icon-line-play"></i> </a>
          </div>
        </div>
        <div className="portfolio-desc">
          <h3>{this.state.video_title}</h3>
          <span>{this.state.location}</span>
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