import React from 'react'
import PropTypes from 'prop-types'

const Error = (props) => {
  const { message } = props;
  return (
    <div>
      <h3>Error</h3>
      <p>{message}</p>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Error
