import React from 'react'

const TemplateWrapper = ({ children }) => {
  
  return (
    <div id={`content`} className="bg-dr"> 
      <div>{children}</div>
    </div>
  )
}
export default TemplateWrapper
