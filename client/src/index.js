import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';

import App from './components/LandingPage/App';
import Dashboard from './components/Dashboard';

import './styles/main.sass';

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql',
})

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/dashboard/:name" component={Dashboard} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
