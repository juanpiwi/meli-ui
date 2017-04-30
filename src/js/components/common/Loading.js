import React from 'react'
import loading from './../../../images/loading.gif'

require('./../../../styles/scss/loading.scss')

const Loading = () => (
  <div className="container-loading">
    <img src={loading} alt="Cargando..." />
  </div>
)

export default Loading
