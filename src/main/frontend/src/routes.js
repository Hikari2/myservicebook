import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import React from 'react'
import { stringify, parse } from 'qs'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Layout from './views/layout'
import HomeView from './views/home-view'
import PageNotFoundView from './views/page-not-found-view'
import Login from './views/login-view'
import Documents from './views/documents-view'
import Contacts from './views/contacts-view'

const stringifyQuery = (query) => stringify(query, { arrayFormat: 'brackets' })
const history = useRouterHistory(createBrowserHistory)({ parseQueryString: parse, stringifyQuery })

export default (
  <Router history={history}>
    <Route path='/login' component={Login} />
    <Route path='/' component={Layout}>
      <IndexRoute component={HomeView} />
      <Route path='/documents' component={Documents} />
      <Route path='/contacts' component={Contacts} />
      <Route path='*' component={PageNotFoundView} />
    </Route>
  </Router>
)
