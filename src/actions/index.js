import ActionTypes from '../action-types/';
import {SearchAPI} from '../api';

const SearchStart = (condition) => ({
  type: 'SEARCH_START',
  payload: condition
});

const SearchSuccess = (data) => ({
  type: 'SEARCH_SUCCESS',
  payload: data
});

const SearchError = () => ({
  type: 'SEARCH_ERROR',
});

export const SearchAction = (condition, page, pageSize) => (dispatch) => {
  dispatch(SearchStart({condition, page, pageSize}));
  SearchAPI(condition, page, pageSize)
     .then(json => dispatch(SearchSuccess(json)))
     .catch(error => dispatch(SearchError()))
}