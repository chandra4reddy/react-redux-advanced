import axios from 'axios';

import { SAVE_COMMENTS, FETCH_COMMENTS } from 'services/actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENTS,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}