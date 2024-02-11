import React from 'react'
import PropTypes from 'prop-types'

const BookNow = ({ onClick }) => {
    return (
        <button className='book-button' onClick={onClick}>
            BOOK NOW
        </button>
    )
}

BookNow.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default BookNow