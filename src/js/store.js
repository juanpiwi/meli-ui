import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import reducer from './reducers'

const env = process.env.NODE_ENV

const middleware = [promise(), thunk]

if (env === 'development') {
  middleware.push(logger)
}

const composeEnhancers = env !== 'production' ? composeWithDevTools : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

const store = createStore(reducer, enhancer)

export default store
