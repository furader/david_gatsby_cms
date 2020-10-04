import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate classes={data.classes} content={data.body} title={data.title}      />
    )
  } else {
    return <div>Loading...</div>
  }
}



export default IndexPagePreview
