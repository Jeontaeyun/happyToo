import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas';
import AppContainer  from './src/screens';

const App = () => {
  // Redux-React Connect Code and I add middleware Redux-Saga
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers ,applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store = {store}>
        <AppContainer />
    </Provider>
  );
}

export default App;
