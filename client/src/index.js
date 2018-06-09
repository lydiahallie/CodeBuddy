import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/LandingPage/App';
import Dashboard from './components/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import './styles/main.sass';

export const store = createStore(
  reducers, 
  composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/:name' component={Dashboard} />
      </Switch>
    </Router>  
  </Provider>
, document.getElementById('root'));
registerServiceWorker();