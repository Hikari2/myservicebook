import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React from 'react'
import Layout from './views/layout'
import HomeView from './views/home-view'
import PageNotFoundView from './views/page-not-found-view'
import EventOverview from './views/event-overview-view'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomeView} />
      <Route path='/event-overview' component={EventOverview}/>
      <Route path='*' component={PageNotFoundView}/>
    </Route>
  </Router>
)
