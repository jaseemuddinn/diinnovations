import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './store/configureStore';
console.log(configureStore)
//const store = configureStore(window.__REDUX_STATE__ || {});

const AppBundle = (
  <ReduxProvider store={configureStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.render(
      AppBundle,
      document.getElementById('root')
    );
  });
};





