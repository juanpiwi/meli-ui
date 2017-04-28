import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from './components/Home'
// import List from './components/List'
import Detail from './components/Detail'

import store from './store'

require('./../styles/main.scss')

const history = createBrowserHistory()
const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/items" component={List}>
            <Route path="/items?search=:search" component={List} />
            </Route>*/}
          {/* <Route path="/items" component={Detail}> */}
          <Route path="/items/:id" component={Detail} />
          <Route render={() => <h1>Página no encontrada</h1>} />
        </Switch>
        {/* </Route> */}
      </div>
    </Router>
  </Provider>
  ,
  app,
)
