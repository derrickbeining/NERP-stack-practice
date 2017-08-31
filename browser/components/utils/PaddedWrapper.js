import React from 'react'
import PropTypes from 'prop-types'


function PaddedWrapper ({padAmount, children}) {
  padAmount = padAmount || 20
  return (
    <div style={{padding: padAmount}}>
      {children}
    </div>
  )
}

PaddedWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PaddedWrapper
