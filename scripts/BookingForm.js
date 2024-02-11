import React, { useState } from 'react'

const BookingForm = ({ switchToDone }) => {
    
    return (
        <div>
            <form onSubmit={switchToDone}>
                <h3>Compose a Message</h3>
                <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>

    )
}

export default BookingForm