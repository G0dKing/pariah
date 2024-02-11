import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SentForm = ({ closeModal }) => {
    return (
    <>
        <div className='success-message'>
            <h2>Message Sent!</h2>
            <p>You will receive a reply within 24 hours.</p>
        </div>
    </>
    )
}

SentForm.propTypes = {
    closeModal: PropTypes.func.isRequired
}

export default SentForm