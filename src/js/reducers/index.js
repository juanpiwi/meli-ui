import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import products from './products'
import detail from './detail'


export default combineReducers({
  products,
  detail,
  routing: routerReducer,
})
