import React from 'react'
import PropTypes from 'prop-types'
import { Section1Template } from '../../templates/section1-page'
import { graphql, useStaticQuery } from 'gatsby'
import { Spring } from 'react-spring/renderprops'
import './../../templates/all_css/style.css'
import './../../templates/all_css/css/custom.css'
import './../../templates/all_css/css/resume.css'
import './../../templates/all_css/css/resume_fonts.css'

import './../../templates/all_css/css/bootstrap.css'

const Section1Preview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  console.log("new data section1Preview");
  console.log(data);


  if (data) {
    return (<div className="myWrapper">
      < section id={`slider`} className="slider-element full-screen force-full-screen clearfix"
        style={{ height: "100vh" }} >
        <img className="section1Background" src={data.background_image} alt="background image" />

        <div className="notopmargin full-screen force-full-screen gradient ">
          <div className="container clearfix" style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
            <div className="slider-caption dark slider-caption-left" style={{ top: "177.5px" }}>
              <h2 className="font-primary ls5" data-animate="fadeIn"
                style={{ color: "#303030" }} >{data.title}</h2>

              <p key="81" className="t300 ls1 d-none d-sm-block" data-animate="fadeIn" data-delay="400"
                style={{ color: "#303030" }}>{data.subtitle}</p>


              <a key="85" className="font-primary noborder ls1 topmargin-sm inline-block more-link text-white dark d-none d-sm-inline-block"
                data-animate="fadeIn" data-delay="800" data-scrollto="#section-works" data-offset="0">
                <ul style={{ marginLeft: "25px", fontSize: "1.1rem", color: "#333" }}>
                  {data.achievements.map(element => {
                    return <li  >{element.text}</li>
                  })}
                </ul>
              </a>

              <a key="67" data-animate="fadeIn" data-delay="1200" href="mailto:web@davidrowan.com"> <button
                className="button button-large button-border button-white button-dark noleftmargin">{data.booking}</button> </a>
            </div>


          </div>
        </div>
      </section >
      
      <section id={`content`} className="nobg"  >
        <div className="content-wrap nobottompadding nobg">
          <div id={`section-skills`} className="section nomargin page-section dark nobg clearfix" style={{ paddingBottom: "50px" }} >
            <div className="container clearfix">

              <div className="row clearfix">
                <div className="col-md-5 clearfix">
                  <div>
                    <h2 className="font-primary ls5" data-animate="fadeIn" style={{ color: "#303030", fontSize: "2.5rem", fontWeight: "700" }}
                    >{data.second_title}</h2>
                    <p data-animate="fadeIn" data-delay="400" style={{ color: "#404040", fontSize: "0.875rem", fontWeight: "500" }}>
                      {data.description1}</p>
                    <a data-animate="fadeIn" data-delay="400" className="team" data-toggle="modal" data-target=".bs-example-modal-lg2">
                      <button className="bottommargin button button-large button-border button-white button-dark noleftmargin">
                        {data.speaking_topics_link}</button></a>
                  </div>
                  <div data-animate="fadeIn" data-delay="800">
                    <p style={{ marginRight: "40px", color: "#303030", fontSize: "0875", fontWeight: "500" }}>
                      <strong>{data.strong_text}</strong>
                      {data.description2}</p>
                    <a href="mailto:web@davidrowan.com" className="button button-large button-border button-white button-dark noleftmargin"> {data.booking}</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    )
  } else {
    return <div>Loading...</div>
  }
}



export default Section1Preview
