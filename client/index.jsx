import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
// import { render } from 'react-dom';
// import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './store';
import routes from './routes';
import ThemeProvider from './modules/App/components/ThemeProvider';
import Loader from './modules/App/components/loader';
import './i18n';
import { IntegrationProvider } from './integration-context';

require('./styles/main.scss');

// Load the p5 png logo, so that webpack will use it
require('./images/p5js-square-logo.png');

const history = browserHistory;
const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

const App = ({ integration }) => (
  <IntegrationProvider value={integration}>
    <Provider store={store}>
      <ThemeProvider>
        <Router history={history} routes={routes(store)} />
      </ThemeProvider>
    </Provider>
  </IntegrationProvider>
);

// eslint-disable-next-line import/prefer-default-export
export const P5Editor = ({ integration }) => (
  <Suspense fallback={<Loader />}>
    <App integration={integration} />
  </Suspense>
);

App.propTypes = {
  integration: PropTypes.shape({
    learningComponent: PropTypes.element
  }).isRequired
};

P5Editor.propTypes = {
  integration: PropTypes.shape({
    learningComponent: PropTypes.element
  }).isRequired
};

// const HotApp = hot(App);

// render(
//   <Suspense fallback={<Loader />}>
//     <HotApp />
//   </Suspense>,
//   document.getElementById('root')
// );
