/* eslint-disable no-undef */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ReactDOM from 'react-dom';
import Pages from './pages/index';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Pages />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById('root')
);
