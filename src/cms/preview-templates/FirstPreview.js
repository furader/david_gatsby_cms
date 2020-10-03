import React from 'react'
import PropTypes from 'prop-types'
import { MainPage } from '../../templates/main-page'

 const MainIndex = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MainPage
      classes={data.classes} content={data.body} front={data}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}



export default MainIndex
