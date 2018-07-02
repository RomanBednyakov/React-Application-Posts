import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import App from '../components/App';
import Login from '../components/Login';
import Registration from '../components/Registration';
import store from './store';

const history = createBrowserHistory();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/home" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Redirect to="/home" exact />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

