import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

require('./../../styles/scss/crumbs.scss')

function mapStateToProps(state) {
  return {
    products: state.products.data,
  }
}

/* @connect(mapStateToProps)
class BreadCrumbs extends PureComponent {
  render() {
    const mappedData = (this.props.products.data.length > 0)
    && this.props.products.data[0].categories.map(currCategory => <li>{currCategory}</li>)
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
}
*/
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
