import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import Reducer from './reducers';
import logger from 'redux-logger';
import { watcherSaga } from './Sagas'
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  Reducer, composeWithDevTools( 
    applyMiddleware(sagaMiddleware,logger),
  ));

  sagaMiddleware.run(watcherSaga);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
