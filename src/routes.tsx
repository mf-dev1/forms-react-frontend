import * as React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import HomeContainer from './containers/HomeContainer';
import DetailContainer from './containers/DetailContainer';
import PageNotFound from './components/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/detail/:id" component={DetailContainer} />
    <Route component={PageNotFound} />
  </Switch>
);
