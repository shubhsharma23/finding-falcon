import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Ensure you have 'react-router-dom' installed
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './components/pagenotfound/PageNotFound';
import Home from './components/Home/Home';
import Problem from './components/problem/Problem';
import KudosOnFind from './components/kudos/KudosOnFind';
import SearchFailed from './components/searchfailed/SearchFailed';

const routesConfig = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/problem',
    component: Problem,
  },
  {
    path: '/kudos',
    component: KudosOnFind,
  },
  {
    path: '/pagenotfound',
    component: NotFound,
  },
  {
    path: '/failed',
    component: SearchFailed,
  }
];

const renderRoutes = () => {
  return routesConfig.map((route, index) => (
    <Route key={index} path={route.path} element={<route.component />} exact={route.exact} />
  ));
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>{renderRoutes()}</Routes>
      <Footer />
    </div>
  );
}

export default App;
