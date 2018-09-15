import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
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

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/dashboard/:name" component={Dashboard} />
        </Switch>
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
