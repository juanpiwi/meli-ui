import * as types from '../constants/ActionTypes'

const dataState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null,
}

const productReducer = (state = dataState, action) => {
  switch (action.type) {
    case types.PRODUCTS_REQUEST: {
      return {
        ...state,
        fetching: true,
      }
    }
    case types.PRODUCTS_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.data,
      }
    }
    case types.PRODUCTS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data.slice(0, 4),
      }
    }
    default:
      return state
  }
}

export default productReducer
