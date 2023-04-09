import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {store} from './redux/store';

const AppReduxWrapper = (): JSX.Element => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppReduxWrapper;
