import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/app';


ReactDOM.render(
    <App />
  , document.querySelector('.container'));
