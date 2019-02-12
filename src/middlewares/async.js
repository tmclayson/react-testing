// a function that returns a function that returns a function
// next is a reference to the next middleware on our chain (if we don't care about the incoming action)
// the action that was dispatched
export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on its payload property
  // we just have to assume if the payload has a 'then' propertx, then it is
  // a promise.
  // debugger;
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // if it does, then wait for it to resolve, create a new action and dispatch it
  // the callback function passed to then is called with the data returned by the API
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
  // if it doesn't send the action on
};
