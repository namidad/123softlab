import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './app/features/homePage'
import Skywalker from './app/features/skywalker'


class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/skywalker/:id' component={Skywalker} />
        </Switch>
      </div>
    );
  }
}

export default App;
