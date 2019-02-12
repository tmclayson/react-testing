import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

export default ({ dispatch, getState }) => next => action => {
  // by calling next (but not returning), all the other middlewares will run first
  next(action);
  // after the other middlewares have run, we have our updated state, which we can now validate
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  }
};
