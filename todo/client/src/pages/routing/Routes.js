import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from './../dashboard/Dashboard';
import NotFound from './../NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <section className="container">
      <Routes>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Routes>
    </section>
  );
};

export default Routes;
