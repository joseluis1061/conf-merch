import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from '../containers/Home';
import {Checkout} from '../containers/Checkout';
import {Information} from '../containers/Information';
import {Payment} from '../containers/Payment';
import {Success} from '../containers/Success';
import {NotFound} from '../containers/NotFound';

import '../style/app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/checkout/information' component={Information} />
        <Route exact path='/checkout/payment' component={Payment} />
        <Route exact path='/checkout/success' component={Success} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>    
  );
};

export default App;
