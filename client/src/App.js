import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

import './styles/index.css';
import { initStore } from './store/index';
import Layout from './components/Layout';
import PostsContainer from './containers/PostsContainer';
import PostDetailContainer from './containers/PostDetailContainer';

const store = initStore();

/// The history props aren't passed to a component unless they're a `Route`. Thus, we need
/// to create a custom `Route` component so that our header has access to `this.props.history`
const LayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <Layout {...matchProps}>
            <Component {...matchProps} />
          </Layout>
        );
      }}
    />
  );
};

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <LayoutRoute exact path="/" component={PostsContainer} />
        <LayoutRoute
          exact
          path="/posts/:postId"
          component={PostDetailContainer}
        />
      </Switch>
    </Router>
  </Provider>
);

export default App;
