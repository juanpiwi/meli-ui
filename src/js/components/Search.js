import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../images/Logo_ML.png'
import imgSearch from './../../images/ic_Search.png'

require('./../../styles/scss/search.scss')


class Search extends Component {
  constructor() {
    super()
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="search">
        <div className="container">
          <img src={logo} alt="" />
          <input type="text" placeholder="Nunca dejes de buscar" value={this.state.value} onChange={this.handleChange} />
          <Link to={{ pathname: '/items', search: `?search=${this.state.value}` }}>
            <div className="btn-search">
              <img src={imgSearch} alt="" />
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Search
