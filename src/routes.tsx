import * as React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Home from './containers/Home';
import Detail from './containers/Detail';
import PageNotFound from './components/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/detail/:detailId" component={Detail} />
    <Route component={PageNotFound} />
  </Switch>
);
