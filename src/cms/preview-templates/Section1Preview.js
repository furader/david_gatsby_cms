import React from 'react'
import PropTypes from 'prop-types'
import { Section1Template } from '../../templates/section1-page'

 const Section1Preview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <Section1Template
      {...data}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}



export default Section1Preview
