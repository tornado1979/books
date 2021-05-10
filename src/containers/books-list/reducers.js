import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILED,
  UPDATE_ACTIVE_PAGE,
  UPDATE_SEARCH_STRING,
} from './constants';

const initState = {
    books: [],
    count: 0,
    loading: false,
    activePage: 1,
    searchString: '',
};

export const booksReducer = (state = initState, action) => {
  const {
    payload,
  } = action;

  switch(action.type){
    case DATA_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case DATA_SUCCESS:
      return {
        ...state,
        books: payload.books,
        count: payload.count,
        loading: false,
      }
    case DATA_FAILED:
      return {
        ...state,
        loading: false,
      }
    case UPDATE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: payload.activePage,
      }
    case UPDATE_SEARCH_STRING:
      return {
        ...state,
        searchString: payload.searchString,
      }
    default:
      return {
        ...state,
      }
  }
}
