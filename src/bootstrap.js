import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import history from './history';
import requireAuth from './components/requireAuth';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Layout from './components/layout';

import './style/main.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

class Dashboard extends Component {
  render() {
    return (
      <div>
        hey there
      </div>
    );
  }
}

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/dashboard' component={requireAuth(Dashboard)}/>
          </Layout>
        </Switch>
      </Router>
    </Provider>
    , document.querySelector(".app-wrapper"));
}

document.addEventListener("DOMContentLoaded", main);
