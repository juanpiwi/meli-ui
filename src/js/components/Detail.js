import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDetail } from './../actions'
import Search from './Search'
import BreadCrumbs from './BreadCrumbs'
import Loading from './Loading'

require('./../../styles/scss/productDetail.scss')

function mapStateToProps(state) {
  return {
    detail: state.detail,
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    fetchDetail: bindActionCreators(fetchDetail, dispatch),
  }
  return { actions }
}

@connect(mapStateToProps, mapDispatchToProps)
class ProductDetail extends Component {
  componentDidMount() {
    const { match, actions } = this.props
    actions.fetchDetail(match.params.id)
  }

  render() {
    const { detail } = this.props
    const payload = (Object.prototype.hasOwnProperty.call(detail.data, 'id')) ?
    (<div className="detalleProducto">
      <div className="container">
        <div className="left">
          <img src={detail.data.picture} alt="" />
          <h3>Descripción del producto</h3>
          <div dangerouslySetInnerHTML={{ __html: detail.data.description.text }} />
        </div>
        <div className="right">
          <p>{detail.data.condition} * {detail.data.sold_quantity} vendidos</p>
          <p className="title">{detail.data.title}</p>
          <p className="price">$ {detail.data.price.amount}<sup>{detail.data.price.decimals}</sup></p>
          <button type="button" className="btn">Comprar</button>
        </div>
      </div>
    </div>) : <Loading />
    return (
      <div>
        <Search />
        <BreadCrumbs />
        {payload}
      </div>
    )
  }
}

ProductDetail.propTypes = {
  actions: PropTypes.objectOf(PropTypes.object),
  match: PropTypes.objectOf(PropTypes.object),
  detail: PropTypes.objectOf(PropTypes.object),
}

ProductDetail.defaultProps = {
  actions: {},
  match: {},
  detail: {},
}

export default ProductDetail
