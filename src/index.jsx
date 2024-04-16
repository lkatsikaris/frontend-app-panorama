import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';

import Header from '@edx/frontend-component-header';
import Footer from '@edx/frontend-component-footer';
import messages from './i18n';
import ExamplePage from './example/ExamplePage';

import './index.scss';

subscribe(APP_READY, () => {
  ReactDOM.render(<React.StrictMode>
    <AppProvider>
      <Header />
      <ExamplePage />
      <Footer />
    </AppProvider>
  </React.StrictMode>, document.getElementById('root'))
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages,
});
