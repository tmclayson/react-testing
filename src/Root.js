import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator';
// import reduxPromise from 'redux-promise';
import asyncMiddleware from 'middlewares/async';
// props.children is a react construct that allows us to wrap other components
const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyncMiddleware, stateValidator)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
