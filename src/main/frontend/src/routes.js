import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React from 'react'
import Layout from './views/layout'
import HomeView from './views/home-view'
import PageNotFoundView from './views/page-not-found-view'
import Login from './views/login-view'
import Documents from './views/documents-view'
import Contacts from './views/contacts-view'
// import documents from './views/documents-view'
// <Route path='/documents' component={Documents}/>

export default (
  <Router history={browserHistory}>
    <Route path='/login' component={Login} />
    <Route path='/' component={Layout}>
      <IndexRoute component={HomeView} />
      <Route path='/documents' component={Documents} />
      <Route path='/contacts' component={Contacts} />
      <Route path='*' component={PageNotFoundView} />
    </Route>
  </Router>
)
