import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import App from './components/app';
import todos from './reducers/todos.js';


// אל תתיחס
import { createLogger } from 'redux-logger';
const logger = createLogger({
  collapsed: true
});

const reducers = combineReducers({
  todos: todos,
});

let store = createStore(reducers, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
