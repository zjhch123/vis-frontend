import ActionTypes from '../action-types/';

export const search = (condition) => ({
  type: ActionTypes.main.mainQuery,
  payload: condition
});

