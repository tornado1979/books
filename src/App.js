import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './store';
import './styles/main.scss';
import Homepage from './pages/home';
import NotFoundPage from './pages/notFound'

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route path="/books" render={() => <Homepage />} />
            <Route path="/books/:index" render={() => <Homepage />} />
            <Route component={NotFoundPage} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
