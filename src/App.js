import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Users from './Users';
import Home from './Home';

const App = () => {
  return (
    <Fragment>
      <header>
        <h1>Acme Users</h1>
        <Nav />
      </header>
      <Switch>
        <Route path="/users" exact component={Users} />
        <Route path="/users/:page" exact component={Users} />
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  );
};

export default App;
