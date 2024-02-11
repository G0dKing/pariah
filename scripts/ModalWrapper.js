import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const ModalWrapper = ({children, isModalVisible, closeModal }) => {
  if (!isModalVisible) return null
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      closeModal()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick)
    return () => window.removeEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
      </div>
    </div>
  )
}

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ModalWrapper
