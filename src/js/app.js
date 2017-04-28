import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from './components/Home'
import List from './components/List'
import Detail from './components/ProductDetail'

import store from './store'

require('./../styles/main.scss')

const history = createBrowserHistory()
const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route path="/item" component={List}>
          <Route path="/item?search=:search" component={List} />
        </Route>*/}
        {/* <Route path="/items" component={Detail}> */}
        <Route path="/items/:id" component={Detail} />
        {/* </Route> */}
      </div>
    </Router>
  </Provider>
  ,
  app,
)
