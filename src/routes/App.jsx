import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../containers/Home";
import { Checkout} from "../containers/Checkout";
import { Success } from "../containers/Success";
import { Payment } from "../containers/Payment";
import { Information } from "../containers/Information";
import { NotFound } from "../containers/NotFound";
import Layout from "../components/Layout";
import '../style/components/App.css';
//Contexto y CustomHook para el carrito 
import AppContext from '../contex/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}/>      
            <Route exact path='/checkout' element={<Checkout />} />
            <Route exact path='/checkout/information' element={<Information />} />
            <Route exact path='/checkout/payment' element={<Payment />} />
            <Route exact path='/checkout/success' element={<Success />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>    
    </AppContext.Provider>
  );
};

export default App;







