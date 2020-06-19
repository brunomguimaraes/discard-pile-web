import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import CheckoutPoint from './pages/CheckoutPoint';

const Routes = () => {
    return (
        <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={CreatePoint} path="/create-point" />
        <Route component={CheckoutPoint} path="/checkout-point" />
        </BrowserRouter>
    )
}

export default Routes;