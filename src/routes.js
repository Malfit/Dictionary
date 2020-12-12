import React from 'react';
import EnglishWords from './components/EnglishWords';
import MainPage from './components/MainPage';

const routes = [
  {
    path: '/practice',
    component: <EnglishWords />,
    exact: true,
  },
  {
    path: '/',
    component: <MainPage />,
  },
];

export default routes;