import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import logo from './../../images/Logo_ML.png'

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
          <img src="/images/Logo_ML.png" alt="" />
          <input type="text" placeholder="Nunca dejes de buscar" value={this.state.value} onChange={this.handleChange} />
          <div className="btn-search">
            <Link to={{ pathname: '/items', search: `?search=${this.state.value}` }}>
              <img src="/images/ic_Search.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
