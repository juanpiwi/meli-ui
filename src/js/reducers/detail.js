import * as types from '../constants/ActionTypes'

const dataState = {
  data: {},
  fetching: false,
  fetched: false,
  error: null,
}

const reducer = (state = dataState, action) => {
  switch (action.type) {
    case types.DETAIL_REQUEST: {
      return {
        ...state,
        fetching: true,
      }
    }
    case types.DETAIL_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.data,
      }
    }
    case types.DETAIL_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data.item,
      }
    }
    default:
      return state
  }
}

export default reducer
