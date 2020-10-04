import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

import { createAPI } from './api';
import { reducer } from './Store/reducer';
import { setAuthNeed } from './Store/actions';

const api = createAPI(() => {
  store.dispatch(setAuthNeed(true));
});

const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
