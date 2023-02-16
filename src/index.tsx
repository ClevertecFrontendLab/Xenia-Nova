import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { AppRouter } from './router/app-router';
import { Layout } from './components';
import { store } from './store';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <HashRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </HashRouter>
  </Provider>
);
