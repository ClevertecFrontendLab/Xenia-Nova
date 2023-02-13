import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { AppRouter } from './router/app-router';
import { Layout } from './components';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </HashRouter>
  </React.StrictMode>
);
