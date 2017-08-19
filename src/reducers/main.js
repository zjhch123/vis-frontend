import ActionTypes from '../action-types/';
export default (state = '', action) => {
  switch (action.type) {
    case ActionTypes.main.mainQuery:
      return action.payload;
    default:
      return '';
  }
}