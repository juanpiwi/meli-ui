import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

require('./../../styles/scss/crumbs.scss')

function mapStateToProps(state) {
  return {
    products: state.products.data,
  }
}

const BreadCrumbs = (props) => {
  const mappedData = (props.products.length > 0)
  && props.products[0].categories.map(currCategory => <li>{currCategory}</li>)
  return (
    <div className="breadcrumb">
      <div className="container">
        <ul>
          {mappedData}
        </ul>
      </div>
    </div>
  )
}

BreadCrumbs.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

BreadCrumbs.defaultProps = {
  products: [],
}

export default connect(mapStateToProps)(BreadCrumbs)
