import { createSelector } from 'reselect';
import store from '../../store';

const getState = () => store.getState();

export const getIsLoading = createSelector(
  getState,
  (state) => state.data && state.data.loading
)

export const getBooks = createSelector(
  getState,
  (state) => state.data && state.data.books
)

export const getNumberOfPages = createSelector(
  getState,
  (state) => state.data && state.data.count
)

export const getActivePage = createSelector(
  getState,
  (state) => state.data && state.data.activePage
)

export const getSearchString = createSelector(
  getState,
  (state) => state.data && state.data.searchString
)
