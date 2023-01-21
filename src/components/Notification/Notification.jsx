import React from "react";
import PropTypes from 'prop-types'

export const Notification = ({ notification }) => {
    return (
        <p>{ notification}</p>
    )
}

Notification.propTypes = {
    notification: PropTypes.string.isRequired,
}