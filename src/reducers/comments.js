import { SAVE_COMMENT } from 'actions/types';
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];

    default:
      return state;
  }
};
