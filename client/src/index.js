import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import App from './components/LandingPage/App';
import Dashboard from './containers/Dashboard';

import './styles/main.sass';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/dashboard/:name" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
