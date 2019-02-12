import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const fetchComments = () => {
  // in a test environment, axios requests will fail and return undefined.
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};

export const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
});
