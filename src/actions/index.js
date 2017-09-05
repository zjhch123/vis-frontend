import {SearchAPI, GroupAPI, MapAPI, HostAPI} from '../api';

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

const MapStart = (condition) => ({
  type: 'MAP_START',
  condition
});

const MapSuccess = (condition, payload) => ({
  type: 'MAP_SUCCESS',
  condition,
  payload
});

const MapError = (condition) => ({
  type: 'MAP_ERROR',
  condition
});

const HostStart = (condition) => ({
  type: 'HOST_START',
  condition
});

const HostSuccess = (condition, payload) => ({
  type: 'HOST_SUCCESS',
  condition,
  payload
});

const HostError = (condition) => ({
  type: 'HOST_ERROR',
  condition
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

export const MapAction = (condition) => (dispatch) => {
  dispatch(MapStart(condition));
  MapAPI(condition)
    .then(json => dispatch(MapSuccess(condition, json)))
    .catch(error => dispatch(MapError(condition)));
}

export const HostAction = (condition) => (dispatch) => {
  dispatch(HostStart(condition));
  HostAPI(condition)
    .then(json => dispatch(HostSuccess(condition, json)))
    .catch(error => dispatch(HostError(condition)));
}

