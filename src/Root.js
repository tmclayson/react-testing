import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// props.children is a react construct that allows us to wrap other components
const Root = props => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};

export default Root;
