import React from 'react'
import PropTypes from 'prop-types'

function BtnClose ({ onClick }) {
  return (
    <button className='btn-x' onClick={onClick}>
      X
    </button>
  )
}

BtnClose.propTypes = {
  onClick: PropTypes.func.isRequired
}
export default BtnClose
