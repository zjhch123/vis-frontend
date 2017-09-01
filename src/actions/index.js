import {SearchAPI, GroupAPI} from '../api';

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

const GroupStart = (by) => ({
  type: 'GROUP_START',
  by
});

const GroupSuccess = (by, result) => ({
  type: 'GROUP_SUCCESS',
  by,
  payload: result
});

const GroupError = (by) => ({
  type: 'GROUP_ERROR',
  by
});

export const SearchAction = (condition, page, pageSize) => (dispatch) => {
  dispatch(SearchStart({condition, page, pageSize}));
  SearchAPI(condition, page, pageSize)
     .then(json => dispatch(SearchSuccess(json)))
     .catch(error => dispatch(SearchError()));
};

export const GroupAction = ({condition, by, limit, order, page, pageSize}) => (dispatch) => {
  limit = limit || 10;
  order = order || -1;
  page = page || 1;
  pageSize = pageSize || 10;
  dispatch(GroupStart(by));
  GroupAPI(condition, by, limit, order, page, pageSize)
    .then(json => dispatch(GroupSuccess(by, json)))
    .catch(error => dispatch(GroupError(by)));
};



