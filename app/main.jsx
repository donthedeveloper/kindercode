'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import {whoami} from './reducers/auth';

import store from './store';

// components
// import Jokes from './components/Jokes';
// import Login from './components/Login';
// import WhoAmI from './components/WhoAmI';

// containers
import AppContainer from './containers/AppContainer.jsx';
import UserProfileContainer from './containers/UserProfileContainer';

// utilities
import onEnterData from './utilities/onEnterData';

// actions
import { addCommand } from './reducers/commands';
import {loadChallenge} from './action-creators/challenges'

const onAppContainerEnter = () => {
  store.dispatch(loadChallenge(1))
  onEnterData.commands.forEach((command) => {
    store.dispatch(addCommand(command.text));
  });
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} onEnter={onAppContainerEnter}>
        {/*<IndexRedirect to="/jokes" />*/}
      </Route>
      <Route path="/profile/:id" component={UserProfileContainer} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
