import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import BreadCrumbs from './common/BreadCrumbs'
import Loading from './common/Loading'
import { fetchProduct } from './../actions'


require('./../../styles/scss/resultSearch.scss')

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    fetchProduct: bindActionCreators(fetchProduct, dispatch),
  }
  return { actions }
}

@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
  componentDidMount() {
    const { actions, location } = this.props
    const params = new URLSearchParams(location.search)
    const param = params.get('search')
    actions.fetchProduct(param)
  }
  render() {
    const { products } = this.props
    const mappedData = (products.data.length) ? products.data.map(currProduct => (
      <div>
        <Link to={{ pathname: `/items/${currProduct.items.id}` }}>
          <div className="item">
            <div className="left">
              <img src={currProduct.items.picture} alt="" />
              <div className="details">
                <p className="price">$ {currProduct.items.price.amount}</p>
                <p>{currProduct.items.title}</p>
              </div>
            </div>
            <div className="right">
              <p>Capital Federal</p>
            </div>
          </div>
        </Link>
      </div>
    )) : <Loading />

    return (
      <div>
        {/* <Search /> */}
        <BreadCrumbs />
        <div className="results">
          <div className="container">
            {mappedData}
          </div>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  products: PropTypes.objectOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.object),
  location: PropTypes.objectOf(PropTypes.string).isRequired,
}

List.defaultProps = {
  products: {},
  actions: {},
}

export default List
