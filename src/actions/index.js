import ActionTypes from '../action-types/';

export const Search = (condition) => ({
  type: ActionTypes.main.Query,
  payload: condition
});