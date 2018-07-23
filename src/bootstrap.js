import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Layout from './components/layout';

import './style/main.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
