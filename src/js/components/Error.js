import React, { PropTypes } from 'react'

const Error = props => (
  <div>
    <h3>Error</h3>
    <p> {props.message} </p>
  </div>
)

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Error
