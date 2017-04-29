import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
// BrowserRouter as Router,
  Route,
//  Switch,
Redirect,
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from './components/Home'
import List from './components/List'
import Detail from './components/Detail'

import store from './store'

require('./../styles/main.scss')

const history = createBrowserHistory()
const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={Home} />
        <Route exact path="/items" search="?search=:search" component={List} />
        <Route exact path="/items/:id" component={Detail} />
        {/* <Route path="/items" component={List}>
          <Route path="/items?search=:search" component={List} />
        </Route>
        <Route path="/items" component={Detail}>
          <Route path="/items/:id" component={Detail} />
        </Route> */}
      </div>
    </ConnectedRouter>
  </Provider>
  ,
  app,
)
