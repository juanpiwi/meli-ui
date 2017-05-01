import axios from 'axios'

import * as types from './../constants/ActionTypes'
import Config from './../../config/config'

function requestData(action) {
  return { type: action }
}

function receiveData(json, action) {
  return {
    type: action,
    data: json,
  }
}

function receiveError(json, action) {
  return {
    type: action,
    data: json,
  }
}

export function fetchProduct(param) {
  const urlDto = `${Config.api.url}/meli-api/v1/items?q=${param}`
  return (dispatch) => {
    dispatch(requestData(types.PRODUCTS_REQUEST))
    return axios({
      url: urlDto,
      timeout: 20000,
      method: 'get',
      headers: { Authorization: 'Bearer a4811fx8e88a6x11c78g' },
      responseType: 'json',
    }).then(response => dispatch(receiveData(response.data, types.PRODUCTS_SUCCESS)))
      .catch(error => dispatch(receiveError(error.response.data, types.PRODUCTS_FAILURE)))
  }
}

export function fetchDetail(param) {
  const urlDto = `${Config.api.url}/meli-api/v1/items/${param}`
  return (dispatch) => {
    dispatch(requestData(types.DETAIL_REQUEST))
    return axios({
      url: urlDto,
      timeout: 20000,
      method: 'get',
      headers: { Authorization: 'Bearer a4811fx8e88a6x11c78g' },
      responseType: 'json',
    }).then(response => dispatch(receiveData(response.data, types.DETAIL_SUCCESS)))
      .catch(error => dispatch(receiveError(error.response.data, types.DETAIL_FAILURE)))
  }
}
