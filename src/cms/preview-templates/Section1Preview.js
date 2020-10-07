import React from 'react'
import PropTypes from 'prop-types'
import { Section1Template } from '../../templates/section1-page'
import { graphql, useStaticQuery } from 'gatsby'
import { Spring } from 'react-spring/renderprops'

const Section1Preview = async ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();




  if (data) {
    return (< section id={`slider`} className="slider-element full-screen force-full-screen clearfix"
      style={{ height: "100vh" }} >


      <div className="notopmargin full-screen force-full-screen gradient ">
        <div className="container clearfix" style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
          <div className="slider-caption dark slider-caption-left" style={{ top: "177.5px" }}>
            <h2 className="font-primary ls5" data-animate="fadeIn"
              style={{ color: "#303030" }} >{data.title}</h2>

            <p key="81" className="t300 ls1 d-none d-sm-block" data-animate="fadeIn" data-delay="400"
              style={{ color: "#303030" }}>{data.subtitle}</p>
          </div>

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
    </section >
    )
  } else {
    return <div>Loading...</div>
  }
}



export default Section1Preview
