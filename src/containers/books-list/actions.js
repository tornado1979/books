import API from '../../api';

import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILED,
  UPDATE_ACTIVE_PAGE,
  UPDATE_SEARCH_STRING
} from './constants';

export const dataRequest = () => {
  return {
    type: DATA_REQUEST,
  }
}

export const dataSuccess = (data) => {
  return {
    type: DATA_SUCCESS,
    payload: data,
  };
}

export const dataFetch = (
  pageIndex=1,
  searchString='') => (dispatch) => {
  dispatch(dataRequest());
  API.getBooks(
    pageIndex,
    searchString)
  .then(response => response.json())
  .then(data => {
    dispatch(dataSuccess(data));
  });
}

export const dataFailed = () => {
  return {
    type: DATA_FAILED,
  }
}

export const updateActivePage = (pageIdx) => {
  return {
    type: UPDATE_ACTIVE_PAGE,
    payload: {
      activePage: pageIdx,
    },
  };
}

export const updateSearchString = (value) => {
  return {
    type: UPDATE_SEARCH_STRING,
    payload: {
      searchString: value,
    },
  };
}
