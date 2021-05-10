import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history'

import { booksReducer } from './containers/books-list/reducers';

const initialState = {
  data: {
    books: [],
    count: 0,
    loading: false,
    activePage: 1,
    searchString: '',
  }
};

export const history = createBrowserHistory();

const enhancers = []
const middlewares = [
  thunk,
  routerMiddleware(history),
]
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension // eslint-disable-line prefer-destructuring

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
)

const appReducers = (history) => combineReducers({
  router: connectRouter(history),
  data: booksReducer,
})

const store = createStore(
  appReducers(history),
  initialState,
  composedEnhancers,
)

export default store
